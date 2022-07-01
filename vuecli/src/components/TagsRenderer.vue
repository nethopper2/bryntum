<template>
  <span>
    <span v-for="i in props.tags" :key="i">{{ i }}</span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
// console.log('TagRenderer!!!')
// console.log(props)
</script>
