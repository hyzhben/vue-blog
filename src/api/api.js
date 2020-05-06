import http from '../utils/http'
import {ERR_OK,ERR_NO_LOGIN,ERROR_USER_OR_PASSWORD} from "./config";
import {Message} from 'element-ui';
import router from '../route/index'
/**
 *  @parms resquest 请求地址 例如：http://47.102.197.42:8080/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest="/blog";


//处理返回结果
export function ErrorCodeDeal(res) {
  if(res.data.code == ERR_NO_LOGIN){
    router.replace({ path: '/signIn/login' })
    Message.error('请先登录')
  }
  if(res.data.code == ERROR_USER_OR_PASSWORD){
    Message.error('你输入的用户名或者密码错误')
  }
}


//login请求 登录请求
export function postFormAPI(params){
  return http.post(`${resquest}/login`,params)
}

