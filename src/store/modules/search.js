/*此文件是初始搜索的状态模块*/
import {RECEIVE_SEARCH} from '../mutation-types'
import {reqInit} from '../../api'

const state={
  totals:{},//提示数据内容

}
const mutations ={
[RECEIVE_SEARCH](state,data){
  state.totals=data
},
}

const actions ={
  //提示数据内容
  async searchContent({commit}){
     const  result = await reqInit()
    // console.log(result,'-------提示内容的请求');
    if (result.code*1===200){
      commit(RECEIVE_SEARCH,result.data)
    }
  },
}
const getters={

}

export default {
  state,
  mutations,
  actions,
  getters
}



