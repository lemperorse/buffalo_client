import Vue from 'vue'
import Vuex from 'vuex' 
import pathify from 'vuex-pathify'
import auth from './auth'
import core from './core'
import buffalo from './buffalo'
import farmer from './farmer'
import cer from './cer'
Vue.use(Vuex) 

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [pathify.plugin],
    modules: {
      core,
      auth,
      buffalo,
      cer,
      farmer
    }
  });

  return Store;
}