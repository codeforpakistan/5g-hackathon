/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#E11B22',
          secondary: '#FFDD00',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#00BCD4',
          secondary: '#03A9F4'
        }
      }
    },
  },
})
