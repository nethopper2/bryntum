<template>
  <q-page>
    <div id="tempApp">
      <div class="b-grid-container">
        <bryntum-grid ref="grid" v-bind="gridConfig" :extra-data="extraData" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import {
  BryntumGrid,
} from '@bryntum/grid-vue-3';

import { useGridConfig } from 'components/AppConfig'

const gridConfig = reactive(useGridConfig())
const extraData = {
  clickHandler: () => {
    console.log('Toast was here!')
    //Toast.show({ html, color, timeout: 3000 });
  }
}

</script>

<style lang="scss">
@import '~@bryntum/grid/grid.stockholm.css';
@import '~@bryntum/demo-resources/scss/example.scss';

.b-grid-cell .b-button {
  width: 100%;

  span {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

#tempApp {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.b-grid-container {
  flex: 1;
}
</style>
