import http from '../utils/http'
import {ERR_OK,ERR_NO_LOGIN,ERROR_USER_OR_PASSWORD,TOKEN_OVERDUE} from "./config";
import {Message} from 'element-ui';
import router from '../route/index'
/**
 *  @parms resquest 请求地址 例如：http://47.102.197.42:8080/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
// let resquest="/blogApi";
let resquest = "http://47.102.197.42:8080/blog"

//处理返回结果
export function ErrorCodeDeal(res) {
  if(res.data.code == ERR_NO_LOGIN){
    router.replace({ path: '/signIn/login' })
    Message.error('请先登录')
    return;
  }
  if(res.data.code == TOKEN_OVERDUE){
    router.replace({ path: '/signIn/login' })
    Message.error('token过期,请重新登录')
    return;
  }
}


//login请求 登录请求
export function postFormAPI(params){
  return http.post(`${resquest}/login`,params)
}

//上传图片
export function uploadFile(params,headers) {
  return http.post(`${resquest}/service/blog/uploadFiles`,params,headers)
}

//文章添加
export  function addArticle(params){
  return http.post(`${resquest}/service/blog/createArticle`,params)
}

//获取文章列表
export  function getArtilceList(params){
  return http.post(`${resquest}/service/blog/qryBlogArticle`,params)
}

//获取新发布文章
export  function getNewestArticle(params){
  return http.post(`${resquest}/service/blog/qryNewestArticle`,params)
}

