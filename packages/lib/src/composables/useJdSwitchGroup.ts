import { inject, onUnmounted, onMounted, reactive } from 'vue';
import { Subscription } from 'rxjs';
import { JdSwitch } from '../modules/JdSwitch';
import { JD_SWITCH_TOKEN } from './types';

type FnCallback<V = any> = (value: V) => void;

export function useJdSwitchGroup<V = any>() {
  const jdSwitch = inject<JdSwitch<V>>(JD_SWITCH_TOKEN);
  const listener = new Subscription();

  const state = reactive({
    isSelectionAll: false,
    selectedValue: null
  });

  let callbackChange: FnCallback<V> = () => {};

  const onChange = (callback: FnCallback<V>) => {
    callbackChange = callback;
  };

  const handleChange = (value: any) => {
    updateState();
    callbackChange(value);
  };

  const updateState = () => {
    state.isSelectionAll = jdSwitch.isSelectionAll;
    state.selectedValue = jdSwitch.selectedValue;
  };

  onMounted(() => {
    listener.add(jdSwitch.observe.subscribe(handleChange));
    updateState();
  });

  onUnmounted(() => {
    listener.unsubscribe();
  });

  return {
    jdSwitch,
    state,
    onChange
  };
}
