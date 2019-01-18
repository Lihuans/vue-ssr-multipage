import Firebase from 'firebase/app'
import 'firebase/database'

export function createAPI ({ config, version }) {
  Firebase.initializeApp(config)
  return Firebase.database().ref(version)
}
// import request from 'public/js/request';
// import config from 'public/js/app.config';
// import api from  'api';
//
// let reqR = request(config.baseUrl); //直接请求后端接口
// let req = request('/api');
// let loginReq = request();
//
// export default {
// 	login (data) {
// 		return loginReq.post(api.login, data);
// 	}
// };
