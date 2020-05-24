//导入封装好的axios实例
import request from './request'

const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url,params,headers){
    const config={
      method:'get',
      url:url
    }
    if(params) config.params=params
    return request(config,headers)
  },

  post(url,params,headers){
    const config = {
      method:'post',
      url:url
    }
    if(headers) config.myHeaders=headers
    if(params) config.data=params
    return request(config)
  },

  put(url,params,headers){
    const config = {
      method:'put',
      url:url
    }
    if(params) config.params = params
    return request(config,headers)
  },

  delete(url,params,headers){
    const config = {
      methods: 'delete',
      url:url
    }
    if(params) config.params = params
    return request(config,headers)
  },

}
//导出
export default http
