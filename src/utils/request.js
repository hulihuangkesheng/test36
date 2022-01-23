/** 
 * 封装请求接口地址
*/
import axios from 'axios' 
// console.log('axios',axios);

export const host = 'http://localhost:2110'
export const apiUrl = host + '/api'

// 创建axios实例:创建一个类似与axios的对象
const instance = axios.create({
    baseURL:apiUrl,
})
// console.log('');
export default instance
// import axios from 'axios'

// export const host = 'http://120.76.247.5:2003'
// export const apiUrl = host + '/api'

// //创建axios实例：创建一个类似于axios的对象
// const instance = axios.create({
//     baseURL:apiUrl,
// })

// export default instance
//封装请求方法
// function request(config){
//     return instance(config)
// }

// //参数处理
// //get请求  axios.get(url,config)
// request.get = function(url,data,config={}){
//     config.method = 'get',
//     config.params = data;
//     return instance.get(url,config)
// }

// //delete请求 axios.delete(url,config)
// request.delete = function(url,data,config={}){
//     config.method = 'delete',
//     config.params = data
//     return instance.delete(url,config)
// }

// //post请求 axios.post(url,data,config)
// request.post = function(url,data,config){
//     return instance.post(url,data,config)
// }

// //put请求 axios.put(url,data,config)
// request.put = function(url,data,config){
//     return instance.put(url,data,config)
// }

// export default request;

