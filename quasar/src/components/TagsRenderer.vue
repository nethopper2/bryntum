<template>
  <span>
    <q-badge v-for="i in props.tags" :key="i">{{ i }}</q-badge>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
// console.log('TagRenderer!!!')
// console.log(props)
</script>
