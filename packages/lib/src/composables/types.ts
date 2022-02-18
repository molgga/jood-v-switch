import { UnwrapRef } from 'vue';

export const JD_SWITCH_TOKEN = Symbol('JD_SWITCH_TOKEN');

export interface ItemConfig {
  props: UnwrapRef<{ value: any }>;
}
