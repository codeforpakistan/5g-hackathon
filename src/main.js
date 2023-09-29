/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

import VueGtag from "vue-gtag";

app.use(VueGtag, {
  config: { id: "G-7FVR0XX6V7" }
})

app.mount('#app')
