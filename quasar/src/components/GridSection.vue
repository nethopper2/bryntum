<template>
  <!-- TODO: should height be set in here? or a prop with a default to set or left to the parent? -->
  <div class="!flex flex-col" style="height: 400px">
    <div class="grow">
      <slot />
    </div>
  </div>
</template>
