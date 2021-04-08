<template>
  <button class="sample-check" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => {
      return { 'is-checked': props.checked };
    });
    return {
      classes
    };
  }
});
</script>

<style lang="scss" scoped>
.sample-check {
  padding: 8px 15px;
  color: #555555;
  border-radius: 15px;
  background-color: #f5f5f5;
  cursor: pointer;
  &.is-checked {
    color: #ffffff;
    background-color: #2386ff;
  }
}
</style>
