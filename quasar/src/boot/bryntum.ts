import { boot } from 'quasar/wrappers'
import PercentBar from 'components/PercentBar.vue'
import BlueButton from 'components/BlueButton.vue'
import RedButton from 'components/RedButton.vue'
import TagsRenderer from 'components/TagsRenderer.vue'
import Tags from 'components/Tags.vue'
import {QBtn} from 'quasar';

export default boot(({ app }) => {
  // register these globally for Bryntum Grid.
  app.component('TagsRenderer', TagsRenderer);
  app.component('Tags', Tags);
  app.component('QBtn', QBtn);
  app.component('PercentBar', PercentBar);
  app.component('BlueButton', BlueButton);
  app.component('RedButton', RedButton);
})
