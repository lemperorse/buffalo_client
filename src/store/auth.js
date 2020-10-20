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
    async login(context,form){ 
        return await CORE.postHttp('/api/rest-auth/login/',form);
    },
    async changePasswordUser(context,form){
        return await CORE.postHttp(`/api/rest-auth/password/change/`,form);
    },
    async logout(context,form){ 
        return await CORE.postHttp('/api/rest-auth/logout/',null);
    },
    async registerUser(context,form){
        return await CORE.postHttp('api/register',form);
    },
    async registerProfile(context,form){
        return await CORE.postHttp('api/profile/create/',form);
    },
    async getDefaultProfile(context,form){
        return await CORE.getHttp('/api/rest-auth/user/');
    },
    async getUserById(){
        let user = await actions.getDefaultProfile();
        return await CORE.getHttp(`/api/account/${user.pk}/`);
    },
    async getProfileWithPermisssion(context,id){
        return await CORE.getHttp(`/api/account/${id}/`);
    },
    async getPermissionRoute(context,id){
        let user = await actions.getDefaultProfile();
         user =  await actions.getProfileWithPermisssion(context,user.pk);
         if(user.is_staff == true){
             return 'admin'
         }else if(user.is_staff == false){
            return 'user'
         }else{
            return ''
         } 
    }, 
    async updateUser(context,form){
        return await CORE.putHttp(`/api/account/${form.id}/`,form);
    },
    async test(){ 
        return await CORE.getHttp('api/geo/');
    },

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};