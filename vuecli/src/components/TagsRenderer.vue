<template>
  <span>
    <span v-for="i in props.tags" :key="i" style="background: blue; margin: 3px; padding: 2px; color: white;">{{ i }}</span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
// console.log('TagRenderer!!!')
// console.log(props)
</script>
