<template>
  <q-page padding>
    <grid-section>
<!--      <bryntum-grid ref="grid" v-bind="gridConfig" :data="gridTreeData" :row-height="50" />-->
      <bryntum-grid ref="grid" v-bind="gridConfig" :data="gridTreeData" />
    </grid-section>
  </q-page>
</template>

<script setup lang="ts">
import { GridConfig } from '@bryntum/grid'
import { BryntumGrid } from '@bryntum/grid-vue-3'
import { computed, reactive } from 'vue'
import GridSection from 'components/GridSection.vue';

// const gridTreeData = computed((): Partial<GridConfig> => {
const gridTreeData = computed(() => {
  return [
    {
      name: 'MyApp',
      kind: 'Application',
      tags: 'TODO',
      repo: 'https://www.github.com/somewhere',
      expanded: true,
      children: [
        {
          name: 'MyDeployment',
          kind: 'Deployment',
          tags: 'TODO',
          expanded: true,
          // iconCls: 'material-icons-outlined o_cloud',
          children: [
            {
              name: 'MyDeployment',
              // kind: 'Cloud',
              iconCls: 'material-icons-outlined o_cloud'
            }
          ]
        }
      ]
    },
    {
      name: 'Frontend',
      kind: 'Deployment',
      tags: 'TODO',
      expanded: true,
      children: [
        {
          name: 'Deployment',
          iconCls: 'material-icons-outlined o_cloud'
        }
      ]
    }
    // {
    //   name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet assumenda ipsum iusto omnis sit suscipit. Blanditiis facilis fugiat molestiae nisi non porro quidem, quis similique tempora tenetur! Ipsa, reiciendis!'
    // }
  ]
})

const gridConfig = reactive<Partial<GridConfig>>({
  features: {
    cellEdit: false,
    stripe : true,
    tree: true,
  },

  columns: [
    { text: 'Kind', field: 'kind', type: 'tree', align: 'right', locked: true },
    // { text: 'Name', field: 'name', flex: 1, autoHeight: true, maxWidth: 100 },
    { text: 'Name', field: 'name', flex: 1 },
    {
      vue: true,
      text: 'tags',
      field: 'tags',
      // hideable: true,
      cellCls: 'flex-wrap', // tailwindcss class
      autoHeight: true,
      // fitMode: 'exact',
      // autoHeight: true, maxWidth: 100,
      renderer() {
        // The object needed by the wrapper to render the component
        return {
          // Required. Name of the component to render.
          // The component must be registered globally in main.js
          // https://vuejs.org/v2/guide/components.html#Dynamic-Components
          is: 'Tags',
          // keys(o?.tags || {})
          tags: ['edge', 'core'],
        }
      }
    },
    { text: 'Multicloud?', field: 'tags' },
    { text: 'Repo', field: 'repo' },
    { text: 'Object Exposed', field: 'tags', flex: 1 },
  ],
})
</script>

<style lang="scss">
@import '~@bryntum/grid/grid.classic-dark.css';
@import '~@bryntum/demo-resources/scss/example.scss';
</style>
