import Firebase from 'firebase'
import LRU from 'lru-cache'

export function createAPI ({ config, version }) {
  let api
  // this piece of code may run multiple times in development mode,
  // so we attach the instantiated API to `process` to avoid duplications
  //   console.log('11111111===',process.__API__)
  if (process.__API__) {
    api = process.__API__
  } else {
    Firebase.initializeApp(config)
    api = process.__API__ = Firebase.database().ref(version)

    api.onServer = true

    // fetched item cache
    api.cachedItems = LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15 // 15 min cache
    })

    // cache the latest story ids
    api.cachedIds = {}
    ;['top', 'new', 'show', 'ask', 'job'].forEach(type => {
      api.child(`${type}stories`).on('value', snapshot => {
        api.cachedIds[type] = snapshot.val()
      })
    })
  }
  console.log('--==---==',api)
  return api
}
// const axios = require('axios');
// const qs = require('qs');
// const api = require('./api');
// const config = require('../../../../app.config');
//
// const request = axios.create({
// 	baseURL: config.baseUrl,
// 	withCredentials: true
// 	// transformRequest: [function(data) {
// 	//     return qs.stringify(data)
// 	// }]
// });
//
// const loginRequest = axios.create({
// 	baseURL: config.host,
// 	// headers: {
// 	//   'Content-Type': 'application/x-www-form-urlencoded'
// 	// },
// 	withCredentials: true,
// 	transformRequest: [function(data) {
// 		// data.ad_session = '121313'
// 		return qs.stringify(data);
// 	}]
// });
//
// const createError = (resp) => {
// 	// console.log('resp==========',resp,'============resp');
// 	const err = new Error(resp.message);
// 	err.code = resp.status;
// 	return err;
// };
//
// const handleRequest = (resp) => {
// 	console.log(1111);
// 	// console.log('status==========',status,'============status');
// 	// console.log('resp==========', resp.headers['set-cookie'],'============resp');
// 	// console.log('rest==========',rest.headers['set-cookie'],'============rest');
// 	// console.log('rest==========',rest,'============rest');
// 	if(resp.status === 200) {
// 		return resp.data;
// 	}
// 	else {
// 		return createError(resp);
// 	}
// };
//
//
// module.exports = () => {
// 	return {
// 		async login (data) {
// 			return handleRequest(await loginRequest.post(api.login, data));
// 		},
// 		async getIndustry (data) {
// 			return handleRequest(await request.get(api.getIndustry, data));
// 		},
// 		async getCitys () {
// 			return handleRequest(await request.get(api.getCities));
// 		}
// 	};
// };