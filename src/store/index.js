import Vue from 'vue'
import Vuex from 'vuex' 
import pathify from 'vuex-pathify'
import auth from './auth'
import core from './core'

Vue.use(Vuex) 

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [pathify.plugin],
    modules: {
      core,
      auth
    }
  });

  return Store;
}