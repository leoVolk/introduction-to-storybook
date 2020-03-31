import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import Vue from 'vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('RouterLink', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<div><slot>RouterLink</slot></div>',
})

Vue.component('NuxtLink', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<div><slot>NuxtLink</slot></div>',
})
