import request from 'public/js/request';
import config from 'public/js/app.config';
import api from 'public/js/api';

let reqR = request(config.baseUrl); //直接请求后端接口
let req = request('/api');
let loginReq = request();

export default {
	login (data) {
		return reqR.post(api.login, data);
	},
	getUserInfo () {
		return reqR.get(api.userinfo)
	}
};
