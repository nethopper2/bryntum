/**
 * Application configuration
 */
import { DataGenerator } from '@bryntum/grid';

const useGridConfig = () => {
  return {
    selectionMode: {
      row: true
    },

    columnLines: false,
    columns: [
      {
        text: 'Name',
        field: 'name',
        flex: 1
      },
      {
        htmlEncodeHeaderText: false,

        text: 'Percent Bar<br /><small>Vue Component</small>',
        field: 'percent',
        flex: 1,
        align: 'center',
        editor: false,
        vue: true,
        renderer({ record }) {
          // The object needed by the wrapper to render the component
          return {
            // Required. Name of the component to render.
            // The component must be registered globally in main.js
            // https://vuejs.org/v2/guide/components.html#Dynamic-Components
            is: 'PercentBar',

            // `record` is used by `ProgressBar` to show and manipulate values.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            record

            // Any other properties we provide for the Vue component, e.g. `value`.
          };
        }
      },
      {
        text: 'Percent',
        field: 'percent',
        flex: 1,
        type: 'percent'
      },
      {
        htmlEncodeHeaderText: false,

        text: 'Button<br /><small>Vue Component</small>',
        field: 'city',
        align: 'center',
        editor: false,
        width: '15em',
        vue: true,
        renderer({ grid: { extraData: { clickHandler } }, record }) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (record.parentIndex % 2 === 0) {
            // The object needed by the wrapper to render the component
            return {
              // Required. Name of the component to render.
              // The component must be registered globally in main.js
              // https://vuejs.org/v2/guide/components.html#Dynamic-Components
              is: 'BlueButton',
              record,

              // Using our component:
              // is: 'TagsRenderer',
              // tags: ['edge', 'core'],

              // Button click handler defined above
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              clickHandler
            };
          }

          // The object needed by the wrapper to render the component
          return {
            // Required. Name of the component to render.
            // The component must be registered globally in main.js
            // https://vuejs.org/v2/guide/components.html#Dynamic-Components
            is: 'RedButton',

            // `RedButton` gets its text from `record`
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            record,

            // Button click handler defined above
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            clickHandler
          };
        }
      },
      {
        text: 'City<br /><small>Edit to update button</small>',
        htmlEncodeHeaderText: false,
        field: 'city',
        width: '12em'
      }
    ],
    // Store will be created automatically, `syncDataOnLoad` is `true` by default (set in the wrapper)
    data: DataGenerator.generateData(50)
  }
};

export { useGridConfig };
