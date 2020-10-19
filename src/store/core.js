import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify"; 
import axios from "../plugins/axios"; 

const state = {
 
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
    async getHttp(url){
        let request  = await axios.get(url).then((r)=>{return r.data}).catch((e)=>{return e.response.data});
        return request
    },
    async getGeo(context,form){
        let request  = await actions.getHttp('/api/geo/')
        return request
    },
    async getProvince(context,form){
        let request  = await actions.getHttp(`/api/province/${form}`)
        return request
    },
    async getAmphur(context,form){
        let request  = await actions.getHttp(`/api/amphur/${form}`)
        return request
    },
    async getDistrict(context,form){
        let request  = await actions.getHttp(`/api/district/${form}`)
        return request
    },
    async getChoice(context,form){
        let request  = await actions.getHttp(`/api/choice/?name=${form}`)
        return request
    },

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};