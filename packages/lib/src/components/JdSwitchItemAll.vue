<template>
  <div class="jd-switch-item-all" :class="classes">
    <slot :classes="classes" :state="switchState" :click="onClick"></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useJdSwitchGroup } from '../composables/useJdSwitchGroup';

export default defineComponent({
  setup() {
    const { jdSwitch, state: switchState } = useJdSwitchGroup();

    const classes = computed(() => {
      const { isSelectionAll } = switchState;
      return { 'is-active': isSelectionAll };
    });

    const onClick = () => {
      jdSwitch.toggleAll();
    };

    return { classes, switchState, onClick };
  }
});
</script>

<style lang="scss" scoped></style>
