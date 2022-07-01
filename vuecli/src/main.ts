import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PercentBar from './components/PercentBar.vue'
import BlueButton from './components/BlueButton.vue'
import RedButton from './components/RedButton.vue'
import TagsRender from './components/TagsRenderer.vue'

const app = createApp(App)

app.component('TagsRenderer', TagsRender);
app.component('PercentBar', PercentBar);
app.component('BlueButton', BlueButton);
app.component('RedButton', RedButton);

app.use(router)

app.mount('#app')
