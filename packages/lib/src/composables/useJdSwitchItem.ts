import { reactive, onMounted, onUnmounted, computed, UnwrapRef } from 'vue';
import { Subscription } from 'rxjs';
import { useJdSwitchGroup } from './useJdSwitchGroup';

interface ItemConfig {
  props: UnwrapRef<{
    value: any;
  }>;
}

export function useJdSwitchItem<V = any>(config: ItemConfig): any {
  const { props } = config;
  const { jdSwitch } = useJdSwitchGroup<V>();
  const listener = new Subscription();
  const state = reactive({
    isActive: false
  });

  const classes = computed(() => {
    const { isActive } = state;
    return { 'is-active': isActive };
  });

  const onClick = () => {
    jdSwitch.selectValue(props.value);
  };

  const onChanged = () => {
    updateState();
  };

  const updateState = () => {
    state.isActive = jdSwitch.isContain(props.value);
  };

  onMounted(() => {
    listener.add(jdSwitch.observe.subscribe(onChanged));
    jdSwitch.joinValue(props.value);
    updateState();
  });

  onUnmounted(() => {
    jdSwitch.unjoinValue(props.value);
    listener.unsubscribe();
  });

  return {
    state,
    classes,
    onClick
  };
}
