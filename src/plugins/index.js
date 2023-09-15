/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
// import { VueReCaptcha } from 'vue-recaptcha-v3'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    // .use(VueReCaptcha, { siteKey: '6LfARCQoAAAAAHfSE36koPrBoDFRTxgg5TB5egBV' })
}
