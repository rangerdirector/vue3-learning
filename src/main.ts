import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';
import {loadAllPlugins} from './plugins';

import 'normalize.css'

const app = createApp(App);
loadAllPlugins(app);

app.
  use(store).
  mount('#app')
