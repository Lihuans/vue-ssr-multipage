const env = process.env.NODE_ENV;
let config;
if (env !== 'production') { //测试或本地环境
	config = {
		// host: 'https://hrtest.shixiseng.com',
		// host: 'http://172.16.10.243:8003',
		// baseUrl: 'http://172.16.10.243:8003'
		host: 'https://test-ljk.shixiseng.com',
		baseUrl: 'https://test-ljk.shixiseng.com'
		// baseUrl: 'https://hrtest.shixiseng.com/api/v1'
	};
} else { //线上环境接口
	config = {
		host: 'https://hr.shixiseng.com',
		baseUrl: 'https://hr.shixiseng.com/api/v1'
	};
}
module.exports = config;
