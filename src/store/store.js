import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//全局
const store= new Vuex.Store({

state:{
    storeList:[],
    logins:[]


},
mutations:{
    initstoreList(state,list){
        
        // state.storeList = list
        localStorage.setItem('list',JSON.stringify(list))
        state.storeList= JSON.parse( localStorage.getItem('list'))
        
    },

    initstoreLogin(state,datas){
        sessionStorage.setItem('datas',JSON.stringify(datas))
        state.logins= JSON.parse( sessionStorage.getItem('datas'))
        
    }
}

})

export default store