<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const key = ()=>route.path
</script>

<template>
  <div>
    <router-view :key="key" v-slot="{Component,route}">
      <component :is="Component"></component>
    </router-view>
  </div>
</template>

<style lang="scss" scoped></style>
