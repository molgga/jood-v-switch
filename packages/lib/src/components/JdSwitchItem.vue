<template>
  <div class="jd-switch-item" :class="classes">
    <slot :classes="classes" :state="state" :click="onClick"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdSwitchItem } from '../composables/useJdSwitchItem';
export default defineComponent({
  props: {
    value: {
      default: null
    }
  },
  setup(props) {
    const { classes, state, onClick } = useJdSwitchItem({ props });
    return { classes, state, onClick };
  }
});
</script>

<style lang="scss" scoped></style>
