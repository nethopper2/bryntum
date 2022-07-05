<template>
<!--  <span class="grid grid-flow-col auto-cols-max gap-1">-->
<!--  <span class="grid grid-cols-3 gap-1 flex-wra">-->
<!--  <span class="flex" style="max-width: 100px;">-->
<!--  <div>-->
    <q-badge v-for="i in tags" :key="i" class="m-1">{{ i }}</q-badge>
    <q-badge v-for="i in tags" :key="i" class="m-1">{{ i }}</q-badge>
    <q-badge v-for="i in tags" :key="i" class="m-1">{{ i }}</q-badge>
    <q-badge v-for="i in tags" :key="i" class="m-1">{{ i }}</q-badge>
<!--  </div>-->
<!--  </span>-->
</template>

<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>
