<template>
  <q-badge v-for="i in props.tags" :key="i">{{ i }}</q-badge>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
// console.log('TagRenderer!!!')
// console.log(props)
</script>
