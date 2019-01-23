const axios = require('axios');
const qs = require('qs');
const api = require('../public/js/api');
const config = require('../public/js/app.config');
const req = require('./request');
const controller = require('../public/js/controller.js');
// import api from '../api'

const request = req(config.baseUrl);

module.exports = () => {
	return controller(request);
};

