import * as types from './mutation-types'
import {saveTokens} from "../common/js/cache";

export const saveToken = function({commit},token){
  commit(types.SET_TOKEN,saveTokens(token))
}

export const setArticle = function({commit},article){
  commit(types.SET_ARTICLE,article)
}
