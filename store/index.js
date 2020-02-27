
import Vue from 'vue'
import Vuex from 'vuex'
import {getLocationAPI} from '../api/index'

Vue.use(Vuex)

const state = {
    cityCode: '',
}
const mutations = {
    
    // 获取当前定位cityCode
    getCityCode(state, code) {
        state.cityCode = code
    },
    
}

const actions = {
    // 获取当前定位
    getLocation({ commit }) {
        return new Promise((resolve, reject) => {
            getLocationAPI().then(res => {
                const obj = res.data
                console.log('getLocation',obj)
                commit('getCityCode',obj.adcode)
                resolve()
          }).catch(error => {
            console.log('error',error)
            reject(error)
          })
        })
    },

}

const store = () => new Vuex.Store({
    state,
    mutations,
    actions
})

export default store