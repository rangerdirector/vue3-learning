import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';
import router from './router'
import {loadAllPlugins} from './plugins';

import 'normalize.css'
import 'virtual:windi.css'

const app = createApp(App);
loadAllPlugins(app);

app.
  use(store).
  use(router).
  mount('#app')
