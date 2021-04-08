<template>
  <div class="jd-switch-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { provideJdSwitchGroup } from '../composables';

export default defineComponent({
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    allChoiceValue: {
      default: null
    },
    toggle: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const { modelValue, allChoiceValue = null, multiple = false, toggle = false } = props;
    const jdSwitch = provideJdSwitchGroup({
      initValue: modelValue,
      allChoiceValue,
      multiple,
      toggle
    });
    const { emit } = context;
    const listener = new Subscription();

    const onChange = (value: any) => {
      if (jdSwitch.isSelectionMultiple) {
        emit('update:modelValue', [...value]);
      } else {
        emit('update:modelValue', value);
      }
    };

    onMounted(() => {
      listener.add(jdSwitch.observe.subscribe(onChange));
    });

    onUnmounted(() => {
      listener.unsubscribe();
    });

    return {};
  }
});
</script>

<style lang="scss" scoped></style>
