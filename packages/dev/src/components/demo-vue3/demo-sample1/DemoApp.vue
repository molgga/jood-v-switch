<template>
  <div>
    <demo-panel title="Single checkbox" description="multiple=false / toggle=true">
      <div>value: {{ state.myValue10 }}</div>
      <jd-switch-group
        v-model="state.myValue10"
        :multiple="false"
        :toggle="true"
        @update:modelValue="onTestChange"
        class="switch-group"
      >
        <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
          <template #default="switchScope">
            <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
              value={{ item }} {{ switchScope.state }}
            </sample-check>
          </template>
        </jd-switch-item>
      </jd-switch-group>
    </demo-panel>

    <demo-panel-devider :half="true" />
    <demo-preview-code v-bind="Codes.example1" />
    <demo-panel-devider />

    <demo-panel title="Radio button" description="multiple=false / toggle=false">
      <div>value: {{ state.myValue11 }}</div>
      <jd-switch-group
        v-model="state.myValue11"
        :multiple="false"
        :toggle="false"
        @update:modelValue="onTestChange"
        class="switch-group"
      >
        <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
          <template #default="switchScope">
            <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
              value={{ item }} {{ switchScope.state }}
            </sample-check>
          </template>
        </jd-switch-item>
      </jd-switch-group>
    </demo-panel>

    <demo-panel-devider :half="true" />
    <demo-preview-code v-bind="Codes.example2" />
    <demo-panel-devider />

    <demo-panel title="Multiple checkbox" description="multiple=true / toggle=true">
      <div>value: {{ state.myValue20 }}</div>
      <jd-switch-group
        :multiple="true"
        :toggle="true"
        v-model="state.myValue20"
        @update:modelValue="onTestChange"
        class="switch-group"
      >
        <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
          <template #default="switchScope">
            <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
              value={{ item }} {{ switchScope.state }}
            </sample-check>
          </template>
        </jd-switch-item>
      </jd-switch-group>
    </demo-panel>

    <demo-panel-devider :half="true" />
    <demo-preview-code v-bind="Codes.example3" />
    <demo-panel-devider />

    <demo-panel
      title="Multiple checkbox and All check"
      description="multiple=true / toggle=false / and item-all component"
    >
      <div>value: {{ state.myValue30 }}</div>
      <jd-switch-group
        :multiple="true"
        :toggle="true"
        v-model="state.myValue30"
        @update:modelValue="onTestChange"
      >
        <jd-switch-item-all class="switch-item">
          <template #default="switchScope">
            <sample-check :checked="switchScope.state.isSelectionAll" @click="switchScope.click()">
              {{ switchScope.state }}
            </sample-check>
          </template>
        </jd-switch-item-all>

        <div class="switch-group">
          <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
            <template #default="switchScope">
              <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
                value={{ item }} {{ switchScope.state }}
              </sample-check>
            </template>
          </jd-switch-item>
        </div>
      </jd-switch-group>
    </demo-panel>

    <demo-panel-devider :half="true" />
    <demo-preview-code v-bind="Codes.example4" />
    <demo-panel-devider />

    <demo-panel
      title="Special - specific all choice value checkbox"
      description="multiple=true / toggle=false / allChoiceValue=it-is-all"
    >
      <div>value: {{ state.myValue40 }}</div>
      <jd-switch-group
        :multiple="true"
        :toggle="true"
        allChoiceValue="it-is-all"
        v-model="state.myValue40"
        @update:modelValue="onTestChange"
      >
        <jd-switch-item value="it-is-all" class="switch-item">
          <template #default="switchScope">
            <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
              value="it-is-all" {{ switchScope.state }}
            </sample-check>
          </template>
        </jd-switch-item>

        <div class="switch-group">
          <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
            <template #default="switchScope">
              <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
                value={{ item }} {{ switchScope.state }}
              </sample-check>
            </template>
          </jd-switch-item>
        </div>
      </jd-switch-group>
    </demo-panel>

    <demo-panel-devider :half="true" />
    <demo-preview-code v-bind="Codes.example5" />
    <demo-panel-devider />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { JdSwitchGroup, JdSwitchItem, JdSwitchItemAll } from '@jood/v-switch';
import SampleCheck from './SampleCheck.vue';
import Codes from '@/codes/sample1';

export default defineComponent({
  components: {
    SampleCheck,
    JdSwitchGroup,
    JdSwitchItem,
    JdSwitchItemAll
  },
  setup() {
    const state = reactive({
      myValue10: 1,
      myValue11: 1,
      myValue20: [1, 2],
      myValue30: [1, 2],
      myValue40: [1, 2]
    });

    const onTestChange = (v: any) => {
      console.log('onTestChange', v);
    };

    return {
      Codes,
      state,
      onTestChange
    };
  }
});
</script>

<style lang="scss" scoped>
.partition {
  display: block;
  margin: 0;
  padding: 20px 0;
  border: none;
}
.box {
  padding: 10px 0;
}
.switch-group {
  display: flex;
  flex-wrap: wrap;
}
.switch-item {
  margin: 5px;
}
</style>
