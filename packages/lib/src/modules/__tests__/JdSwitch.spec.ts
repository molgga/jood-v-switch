import { JdSwitch } from '../JdSwitch';
describe('test', () => {
  let jdSwitch:JdSwitch ;

  beforeEach(() => {
    jdSwitch =new JdSwitch();
  });

  afterEach(() => {
    jdSwitch.destroy();
  })

  test('joinValue, unjoinValue', () => {
    jdSwitch.init();
    expect(jdSwitch.joinedValues.length).toBe(0);
    jdSwitch.joinValue('foo');
    expect(jdSwitch.joinedValues.length).toBe(1);
    jdSwitch.joinValue('bar');
    expect(jdSwitch.joinedValues.length).toBe(2);
    jdSwitch.unjoinValue('bar');
    expect(jdSwitch.joinedValues.length).toBe(1);
    jdSwitch.unjoinValue('unknown');
    expect(jdSwitch.joinedValues.length).toBe(1);
    jdSwitch.unjoinValue('foo');
    expect(jdSwitch.joinedValues.length).toBe(0);
  });

  test('selectValue not multiple, toggle mode', () => {
    jdSwitch.init({
      multiple: false,
      toggle: true,
    });
    expect(jdSwitch.selectedValue).toBe(null);
    jdSwitch.selectValue(1);
    expect(jdSwitch.selectedValue).toBe(1);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toBe(2);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toBe(null);
  });

  test('selectValue not multiple, not toggle mode', () => {
    jdSwitch.init({
      multiple: false,
      toggle: false,
    });
    expect(jdSwitch.selectedValue).toBe(null);
    jdSwitch.selectValue(1);
    expect(jdSwitch.selectedValue).toBe(1);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toBe(2);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toBe(2);
  });

  test('selectValue multiple, toggle mode', () => {
    jdSwitch.init({
      multiple: true,
      toggle: true,
    });
    expect(jdSwitch.selectedValue).toEqual([]);
    jdSwitch.selectValue(1);
    expect(jdSwitch.selectedValue).toEqual([1]);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toEqual([1, 2]);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toEqual([1]);
  });

  test('selectValue multiple, specific allChoiceValue', () => {
    jdSwitch.init({
      multiple: true,
      toggle: true,
      allChoiceValue: 99,
    });
    expect(jdSwitch.selectedValue).toEqual([]);
    jdSwitch.selectValue(1);
    expect(jdSwitch.selectedValue).toEqual([1]);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toEqual([1, 2]);
    jdSwitch.selectValue(99);
    expect(jdSwitch.selectedValue).toEqual([99]);
    jdSwitch.selectValue(99);
    expect(jdSwitch.selectedValue).toEqual([]);
  });
  
  test('selectValue multiple, specific allChoiceValue', () => {
    jdSwitch.init({
      multiple: true,
      toggle: true,
      allChoiceValue: 99,
    });
    expect(jdSwitch.selectedValue).toEqual([]);
    jdSwitch.selectValue(1);
    expect(jdSwitch.selectedValue).toEqual([1]);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toEqual([1, 2]);
    jdSwitch.selectValue(99);
    expect(jdSwitch.selectedValue).toEqual([99]);
    jdSwitch.selectValue(99);
    expect(jdSwitch.selectedValue).toEqual([]);
  });

  test('isSelectionAll', () => {
    jdSwitch.init({
      multiple: true,
      toggle: true,
    });
    jdSwitch.joinValue(1);
    jdSwitch.joinValue(2);
    jdSwitch.joinValue(3);
    expect(jdSwitch.isSelectionAll).toBe(false);
    jdSwitch.selectValue(1);
    expect(jdSwitch.isSelectionAll).toBe(false);
    jdSwitch.selectValue(2);
    expect(jdSwitch.isSelectionAll).toBe(false);
    jdSwitch.selectValue(3);
    expect(jdSwitch.isSelectionAll).toBe(true);
    jdSwitch.selectValue(2);
    expect(jdSwitch.isSelectionAll).toBe(false);
  });
  
  test('isContain', () => {
    jdSwitch.init({
      multiple: true,
      toggle: true,
    });
    jdSwitch.joinValue(1);
    jdSwitch.joinValue(2);
    jdSwitch.joinValue(3);
    expect(jdSwitch.isContain(1)).toBe(false);
    jdSwitch.selectValue(1);
    expect(jdSwitch.isContain(1)).toBe(true);
    jdSwitch.selectValue(1);
    expect(jdSwitch.isContain(1)).toBe(false);
  });

  test('addAll', () => {
    jdSwitch.init({
      multiple: true,
      toggle: true,
    });
    jdSwitch.joinValue(1);
    jdSwitch.joinValue(2);
    jdSwitch.joinValue(3);
    expect(jdSwitch.selectedValue).toEqual([]);
    jdSwitch.selectAll();
    expect(jdSwitch.selectedValue).toEqual([1,2,3]);
  });

  test('clearAll', () => {
    jdSwitch.init({
      multiple: true,
      toggle: true,
    });
    jdSwitch.joinValue(1);
    jdSwitch.joinValue(2);
    jdSwitch.joinValue(3);
    expect(jdSwitch.selectedValue).toEqual([]);
    jdSwitch.selectValue(1);
    jdSwitch.selectValue(2);
    expect(jdSwitch.selectedValue).toEqual([1,2]);
    jdSwitch.clearAll();
    expect(jdSwitch.selectedValue).toEqual([]);
  });

  test('addAll, clearAll', () => {
    jdSwitch.init({
      multiple: true,
      toggle: true,
    });
    jdSwitch.joinValue(1);
    jdSwitch.joinValue(2);
    jdSwitch.joinValue(3);
    expect(jdSwitch.selectedValue).toEqual([]);
    jdSwitch.selectValue(1);
    expect(jdSwitch.selectedValue).toEqual([1]);
    jdSwitch.selectAll();
    expect(jdSwitch.selectedValue).toEqual([1,2,3]);
    jdSwitch.clearAll();
    expect(jdSwitch.selectedValue).toEqual([]);
    jdSwitch.selectAll();
    expect(jdSwitch.selectedValue).toEqual([1,2,3]);
    jdSwitch.selectValue(1);
    expect(jdSwitch.selectedValue).toEqual([2,3]);
    jdSwitch.clearAll();
    expect(jdSwitch.selectedValue).toEqual([]);
  });
});