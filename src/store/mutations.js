import * as types from './mutation-types'

const mutations={
  [types.SET_TOKEN](state,token){
    state.token=token;
  },
  [types.SET_ARTICLE](state,article){
    state.article = article
  }
}

export default  mutations
