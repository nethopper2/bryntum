import { boot } from 'quasar/wrappers'
import PercentBar from 'components/PercentBar.vue'
import BlueButton from 'components/BlueButton.vue'
import RedButton from 'components/RedButton.vue'
import TagsRenderer from 'components/TagsRenderer.vue'

export default boot(({ app }) => {
  // register these globally for Bryntum Grid.
  app.component('TagsRenderer', TagsRenderer);
  app.component('PercentBar', PercentBar);
  app.component('BlueButton', BlueButton);
  app.component('RedButton', RedButton);
})
