import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify"; 
import axios from "../plugins/axios"; 

const state = {
    USER:{},
    loginToken: null,
    storeToken : localStorage.getItem('token')
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
    async getHttp(url){
        let request  = await axios.get(url).then((r)=>{return r.data}).catch((e)=>{return e.response.data});
        return request
    },
    async postHttp(url,form){
        let request  = await axios.post(url,form).then((r)=>{return r.data}).catch((e)=>{return e.response.data});
        return request
    },
    async putHttp(url,form){
        let request  = await axios.put(url,form).then((r)=>{return r.data}).catch((e)=>{return e.response.data});
        return request
    },
    async  deleteHttp(url){
        let request  = await axios.delete(url).then((r)=>{return r.data}).catch((e)=>{return e.response.data});
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
    async storeTokenInAxios(context,token){ 
          axios.defaults.headers.common['Authorization'] = (token != null )?`Token ${token}`:'';  
    },
    async storeTokenToStorage(context,token){ 
        localStorage.setItem('token',token )
    },
    async checkToken(context){
        let currentToken  = (state.loginToken != null)?state.loginToken:state.storeToken;
        console.log(currentToken);
        await actions.storeTokenInAxios(context,currentToken);
    }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};