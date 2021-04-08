import { provide } from 'vue';
import { JD_SWITCH_TOKEN } from './types';
import { JdSwitch, SwitchConfig } from '../modules';

export * from './types';
export * from './useJdSwitchGroup';
export * from './useJdSwitchItem';

export const provideJdSwitchGroup = (config?: SwitchConfig): JdSwitch => {
  const jdSwitch = new JdSwitch();
  jdSwitch.init(config);
  provide(JD_SWITCH_TOKEN, jdSwitch);
  return jdSwitch;
};
