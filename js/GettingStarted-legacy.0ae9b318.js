"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[496],{3143:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var o=n(7875),l=n(349),i={class:"page-view"},a={class:"panel"};function c(e,t,n,c,d,s){var p=(0,o.up)("demo-preview-code"),m=(0,o.up)("demo-panel-devider");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",a,[(0,o.Wm)(p,(0,l.vs)((0,o.F4)(e.Codes.install)),null,16),(0,o.Wm)(m,{half:!0}),(0,o.Wm)(p,(0,l.vs)((0,o.F4)(e.Codes.someComponentTemplate)),null,16),(0,o.Wm)(p,(0,l.vs)((0,o.F4)(e.Codes.someComponent)),null,16)])])}var d={install:{title:"package install",description:"",lang:"bash",code:"$ npm install @jood/v-switch\n# or $ yarn add @jood/v-switch"},someComponentTemplate:{title:"SomeComponent.vue",description:"",lang:"html",code:'<template>\n  <jd-switch-group\n    :multiple="true"\n    :toggle="true"\n    v-model="state.myValue"\n    @update:modelValue="onMyValueUpdated"\n  >\n    <jd-switch-item v-for="item in 3" :key="item" :value="item">\n      <template #default="switchScope">\n        <button :checked="switchScope.state.isActive" @click="switchScope.click()">\n          value={{ item }} {{ switchScope.state }}\n        </button>\n      </template>\n    </jd-switch-item>\n  </jd-switch-group>\n</template>'},someComponent:{title:"",description:"",lang:"typescript",code:"import { defineComponent, reactive } from 'vue';\nimport { JdSwitchGroup, JdSwitchItem, JdSwitchItemAll } from '@jood/v-switch';\n\nexport default defineComponent({\n  components: {\n    JdSwitchGroup,\n    JdSwitchItem,\n    JdSwitchItemAll\n  },\n  setup() {\n    const state = reactive({\n      myValue: null\n    });\n    const onMyValueUpdated = (value) => {\n      console.log('onMyValueUpdated', value);\n    }\n    return {\n      state,\n    };\n  }\n});"}},s=(0,o.aZ)({setup:function(){return{Codes:d}}}),p=n(4407);const m=(0,p.Z)(s,[["render",c],["__scopeId","data-v-20d619f4"]]);var u=m}}]);