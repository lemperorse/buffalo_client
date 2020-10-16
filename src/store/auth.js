import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify"; 
import axios from "../plugins/axios"; 

const state = {
 
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
    async login(context,form){
        let request = await axios.post(`/api/rest-auth/login/`,form)
                    .then((r)=>{return r.data})
                    .catch((e)=>{return e.response.data})
        return request;
    },
    async logout(context,form){
        let request = await axios.post(`/api/rest-auth/logout/`)
                    .then((r)=>{return r.data})
                    .catch((e)=>{return e.response.data})
        return request;
    },
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