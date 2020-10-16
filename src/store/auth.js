import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify"; 
import axios from "../plugins/axios"; 

const state = {
 
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
 
    async test(){
        alert("Hello")
    },

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};