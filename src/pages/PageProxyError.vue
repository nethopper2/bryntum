<template>
  <q-page>
    <div id="tempApp">
      <div class="b-grid-container">
        <bryntum-grid ref="grid" v-bind="gridConfig" :data="data" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from 'vue'
import {
  BryntumGrid,
} from '@bryntum/grid-vue-3'

class ProxyTest {
  constructor(public name: string) {}

  // having a ref in our class causes:
  // TypeError: 'set' on proxy: trap returned falsish for property 'someRef'
  someRef = computed(() => {
    return 'test'
  })
}

const data = ref([
  new ProxyTest('Mats'),
  new ProxyTest('Dan'),
  new ProxyTest('Peter'),
  new ProxyTest('Shawn'),
])

const gridConfig = reactive({
  selectionMode: {
    row: true,
  },

  columnLines: false,
  columns: [
    {
      text: 'Name',
      field: 'name',
      flex: 1,
    },
  ],
})
</script>

<style lang="scss">
@import '~@bryntum/grid/grid.stockholm.css';
@import '~@bryntum/demo-resources/scss/example.scss';

#tempApp {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.b-grid-container {
  flex: 1;
}
</style>
