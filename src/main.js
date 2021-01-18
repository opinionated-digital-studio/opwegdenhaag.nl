// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuelidate from 'vuelidate'
import 'typeface-lato'
import 'typeface-karla'
import '~/assets/css/reset.css'
import '~/assets/scss/index.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuelidate)
}
