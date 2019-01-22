const axios = require('axios');
const qs = require('qs');
const api = require('../public/js/api');
const config = require('../public/js/app.config');
const req = require('./request')
// import api from '../api'

const request = req(config.baseUrl);

const loginRequest = req(config.host);


const createError = (resp) => {
	// console.log('resp==========',resp,'============resp');
	const err = new Error(resp.message);
	err.code = resp.status;
	return err;
};

const handleRequest = (resp) => {
	// console.log(1111);
	console.log('status==========',resp,'============status');
	// console.log('resp==========', resp.headers['set-cookie'],'============resp');
	// console.log('rest==========',rest.headers['set-cookie'],'============rest');
	// console.log('rest==========',rest,'============rest');
	if(resp.status === 200) {
		return resp.data;
	}
	else {
		return createError(resp);
	}
};


module.exports = () => {
	return {
		async login (data) {
			return handleRequest(await loginRequest.post(api.login, data));
		},
		async getIndustry (data) {
			return handleRequest(await request.get(api.getIndustry, data));
		},
		async getCitys () {
			return handleRequest(await request.get(api.getCities));
		},
		async getUserInfo() {
			return handleRequest(await request.get(api.userinfo))
		}
	};
};

