export default {
  install: {
    title: 'package install',
    description: '',
    lang: 'bash',
    code: `$ npm install @jood/v-switch
# or $ yarn add @jood/v-switch`
  },
  someComponentTemplate: {
    title: 'SomeComponent.vue',
    description: '',
    lang: 'html',
    code: `<template>
  <jd-switch-group
    :multiple="true"
    :toggle="true"
    v-model="state.myValue"
    @update:modelValue="onMyValueUpdated"
  >
    <jd-switch-item v-for="item in 3" :key="item" :value="item">
      <template #default="switchScope">
        <button :checked="switchScope.state.isActive" @click="switchScope.click()">
          value={{ item }} {{ switchScope.state }}
        </button>
      </template>
    </jd-switch-item>
  </jd-switch-group>
</template>`
  },
  someComponent: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `import { defineComponent, reactive } from 'vue';
import { JdSwitchGroup, JdSwitchItem, JdSwitchItemAll } from '@jood/v-switch';

export default defineComponent({
  components: {
    JdSwitchGroup,
    JdSwitchItem,
    JdSwitchItemAll
  },
  setup() {
    const state = reactive({
      myValue: null
    });
    const onMyValueUpdated = (value) => {
      console.log('onMyValueUpdated', value);
    }
    return {
      state,
    };
  }
});`
  }
};
