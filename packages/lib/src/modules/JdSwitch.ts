import { Observable, Subject } from 'rxjs';
import { SwitchConfig } from './types';

export class JdSwitch<Value = any> {
  protected stateSubject: Subject<Value | Value[]>;
  protected stateObserve: Observable<Value | Value[]>;
  protected value: Value[] = null;
  protected joinedValueList: Value[] = null;
  protected allChoiceValue: any = null;
  protected isSelectedAll: boolean = false;
  protected isMultiple: boolean = false;
  protected isToggle: boolean = false;

  get observe() {
    return this.stateObserve;
  }

  get joinedValues() {
    return this.joinedValueList;
  }

  get isSelectionMultiple() {
    return this.isMultiple;
  }

  get isSelectionToggle() {
    return this.isToggle;
  }

  get isSelectionAll() {
    return this.isSelectedAll;
  }

  get selectedValue() {
    if (this.isMultiple) {
      return this.value;
    } else {
      return this.value[0] || null;
    }
  }

  init(config?: SwitchConfig) {
    const { initValue = null, allChoiceValue = null, multiple = false, toggle = false } =
      config || {};
    if (initValue !== null && initValue.length) {
      this.value = [...initValue];
    } else if (initValue !== null) {
      this.value = [initValue];
    } else {
      this.value = [];
    }
    this.joinedValueList = [];
    this.allChoiceValue = allChoiceValue;
    this.isMultiple = multiple;
    this.isToggle = toggle;
    this.stateSubject = new Subject();
    this.stateObserve = this.stateSubject.asObservable();
  }

  joinValue(value: Value) {
    const index = this.containValueOf(this.joinedValueList, value);
    if (index < 0) {
      this.joinedValueList.push(value);
    }
  }

  unjoinValue(value: Value) {
    const index = this.containValueOf(this.joinedValueList, value);
    if (0 <= index) {
      this.joinedValueList.splice(index, 1);
    }
  }

  selectValue(value: Value) {
    const { isMultiple, isToggle } = this;
    if (isMultiple) {
      this.addValue(value);
    } else {
      const index = this.containValueOf(this.value, value);
      if (0 <= index) {
        if (isToggle) {
          this.value.splice(index, 1);
        }
      } else {
        this.clearAll();
        this.value.push(value);
      }
      this.dispatchChange();
    }
  }

  addValue(value: Value) {
    const allChoiceValue = this.allChoiceValue;
    let upsert = false;
    if (allChoiceValue !== null) {
      if (value === allChoiceValue) {
        const contain = this.isContain(value);
        this.clearAll();
        if (!contain) {
          this.value.push(value);
        }
      } else {
        const allChoiceIndex = this.containValueOf(this.value, allChoiceValue);
        if (0 <= allChoiceIndex) this.value.splice(allChoiceIndex, 1);
        upsert = true;
      }
    } else {
      upsert = true;
    }
    if (upsert) {
      const index = this.containValueOf(this.value, value);
      if (index < 0) {
        this.value.push(value);
      } else {
        this.value.splice(index, 1);
      }
    }
    this.checkSelectionAll();
    this.dispatchChange();
  }

  isContain(value: Value) {
    const index = this.containValueOf(this.value, value);
    return 0 <= index;
  }

  checkSelectionAll() {
    if (!this.isMultiple) return;
    const len = this.joinedValueList.length;
    let isSelectedAll = true;
    for (let i = 0; i < len; i++) {
      const one = this.joinedValueList[i];
      if (this.containValueOf(this.value, one) < 0) {
        isSelectedAll = false;
        break;
      }
    }
    this.isSelectedAll = isSelectedAll;
  }

  selectAll() {
    const len = this.joinedValueList.length;
    for (let i = 0; i < len; i++) {
      const one = this.joinedValueList[i];
      if (this.containValueOf(this.value, one) < 0) {
        this.value.push(one);
      }
    }
    this.isSelectedAll = true;
  }

  clearAll() {
    this.value = [];
    this.isSelectedAll = false;
  }

  toggleAll() {
    if (!this.isSelectedAll) {
      this.selectAll();
    } else {
      this.clearAll();
    }
    this.dispatchChange();
  }

  containValueOf(list: Value[], value: Value) {
    return list.findIndex((item: any) => item === value);
  }

  dispatchChange() {
    this.stateSubject.next(this.selectedValue);
  }

  destroy() {
    try {
      this.stateSubject.unsubscribe();
      this.stateSubject = null;
      this.stateObserve = null;
    } catch (err) {
      //
    }
  }
}
