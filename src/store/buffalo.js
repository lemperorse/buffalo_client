import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify"; 
import axios from "../plugins/axios"; 
import core from './core';

const CORE = core.actions;
const state = {
 
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
   

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};