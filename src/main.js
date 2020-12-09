// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'typeface-lato'
import 'typeface-karla'
import '~/assets/scss/index.scss'
import DefaultLayout from '~/layouts/Default.vue'
import resize from "vue-element-resize-detector";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(resize)
}
