export default {
  example1: {
    title: '',
    description: '',
    lang: 'html',
    code: `<jd-switch-group
  v-model="state.myValue10"
  :multiple="false"
  :toggle="true"
  @update:modelValue="onTestChange"
  class="switch-group"
>
  <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
    <template #default="switchScope">
      <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
        {{ switchScope.state }}
      </sample-check>
    </template>
  </jd-switch-item>
</jd-switch-group>`
  },
  example2: {
    title: '',
    description: '',
    lang: 'html',
    code: `<jd-switch-group
  v-model="state.myValue11"
  :multiple="false"
  :toggle="false"
  @update:modelValue="onTestChange"
  class="switch-group"
>
  <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
    <template #default="switchScope">
      <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
        {{ switchScope.state }}
      </sample-check>
    </template>
  </jd-switch-item>
</jd-switch-group>`
  },
  example3: {
    title: '',
    description: '',
    lang: 'html',
    code: `<jd-switch-group
  :multiple="true"
  :toggle="true"
  v-model="state.myValue20"
  @update:modelValue="onTestChange"
  class="switch-group"
>
  <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
    <template #default="switchScope">
      <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
        {{ switchScope.state }}
      </sample-check>
    </template>
  </jd-switch-item>
</jd-switch-group>`
  },
  example4: {
    title: '',
    description: '',
    lang: 'html',
    code: `<jd-switch-group
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
          {{ switchScope.state }}
        </sample-check>
      </template>
    </jd-switch-item>
  </div>
</jd-switch-group>`
  },
  example5: {
    title: '',
    description: '',
    lang: 'html',
    code: `<jd-switch-group
  :multiple="true"
  :toggle="true"
  :allChoiceValue="0"
  v-model="state.myValue40"
  @update:modelValue="onTestChange"
>
  <jd-switch-item :value="0" class="switch-item">
    <template #default="switchScope">
      <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
        {{ switchScope.state }}
      </sample-check>
    </template>
  </jd-switch-item>

  <div class="switch-group">
    <jd-switch-item v-for="item in 3" :key="item" :value="item" class="switch-item">
      <template #default="switchScope">
        <sample-check :checked="switchScope.state.isActive" @click="switchScope.click()">
          {{ switchScope.state }}
        </sample-check>
      </template>
    </jd-switch-item>
  </div>
</jd-switch-group>`
  }
};
