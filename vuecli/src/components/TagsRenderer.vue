<template>
  <!--
  We also needed to add this span wrapper to fix the issues when using our component.
  Vue3 does not require single root nodes, so we initially did not have the wrapping span.
  If this is a hard requirement, the docs could reflect this when you get to that part of them.
  -->
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
