import { createApp } from 'vue'
import App from './App.vue'
// import {loadAllPlugins} from './plugins';

import 'normalize.css'

const app = createApp(App);
// loadAllPlugins(app);

app.mount('#app')
