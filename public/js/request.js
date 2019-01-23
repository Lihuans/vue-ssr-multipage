import axios from 'axios';
import qs from 'qs';

function requestServer(baseUrl) {
	const request = axios.create({
		headers: {'Content-Type': 'application/json'},
		// transformRequest: [function(data) {
		//   data = qs.stringify(data)
		//   return data
		// }]
	});
	if(baseUrl) {
		request.defaults.baseURL = baseUrl;
	}
	// request.defaults.headers.post['Content-Type'] = 'application/json';
	// request拦截器
	request.interceptors.request.use(config => {
		if(config.method=='get'){
			config.params = {
				build_time: new Date().getTime(),
				...config.params
			};
		}//解决ie，Safari浏览器get缓存
		// console.log('AuthorizationAuthorization==',request.defaults.headers.common['Authorization'])
		// if(localStorage.getItem('token')) {
		// 	config.headers.common['Authorization'] = localStorage.getItem('token')
		// }

		// if (store.getters.token) {
		//   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
		// }
		// if (!config.noTrans) {
		// 	config.transformRequest = [function(data) {
		// 		return qs.stringify(data);
		// 	}];
		// }
		return config;
	}, error => {
		// Do something with request error
		console.log(error); // for debug
		Promise.reject(error);
	});

	// respone拦截器
	request.interceptors.response.use(
		response => {
			/**
    * code为非100是抛错 可结合自己业务进行修改
    */
			// store.state.loading = false;
			const res = response.data;
			// res 就是业务写的返回了，就是{code:100,msg:'数据'}
			if (res.code !== undefined && res.code !== 100) {
				return Promise.reject(res);
			} else if(res.code === 401) {
				console.log('reee===',res.code)
				let current_url = encodeURIComponent(window.location.href);
				window.location.href = `/logins?next=${current_url}`
				return res;
			} else {
				return res;
			}
		},
		error => {
			console.log('err' + error); // for debug
			console.log('errcode' + error.response.status); // for debug
			if(error.response.status == 401){
				let current_url = encodeURIComponent(window.location.href);
				window.location.href = `/login?next=${current_url}`;
				return;
			} else if (error.response.status == 403){
				window.location.href = '/noroot';
				return;
			}
			return Promise.reject(error);
		}
	);

	return request;

}

export default requestServer;
