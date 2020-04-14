/*此文件是实时收搜的状态模块*/
import { RECEIVE_SEARCHSE } from '../mutation-types'
import { reqSearch } from '../../api'

const state = {
  searchdata: []
}
const mutations = {
  [RECEIVE_SEARCHSE](state, data) {
    state.searchdata = data
  }
}

const actions = {
  //提示数据内容
  async grabble({ commit }, newval) {
    const result = await reqSearch(newval)
    if (result.code * 1 === 200) {
      commit(RECEIVE_SEARCHSE, result.data)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}




