<template>
  <div>
    <demo-layout
      title="@jood/v-switch"
      @goGithub="onGoGithub"
      @goNpm="onGoNpm"
      @goDoc="onGoDocument"
    >
      <template #menu>
        <nav class="menu-wrap">
          <demo-menu :menuList="menuList" />
        </nav>
      </template>
      <router-view class="app-body" />
    </demo-layout>
  </div>
</template>

<script lang="ts">
import { demoLinks } from '@/components/demo-vue3';

export default {
  components: {},
  setup() {
    const onGoDocument = () => {
      openTo('https://molgga.github.io/jood-v-switch/documents');
    };

    const onGoGithub = () => {
      openTo('https://github.com/molgga/jood-v-switch');
    };

    const onGoNpm = () => {
      openTo('https://www.npmjs.com/package/@jood/v-switch');
    };

    const openTo = (url: string) => {
      window.open(url);
    };

    const menuList = [
      {
        to: '/',
        label: 'Getting started'
      },
      ...demoLinks
    ];

    return {
      menuList,
      demoLinks,
      onGoGithub,
      onGoNpm,
      onGoDocument
    };
  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  font-size: 15px;
  height: 100%;
}
body a {
  color: #2a9e64;
}
#app {
  height: 100%;
}
</style>
<style lang="scss" scoped></style>
