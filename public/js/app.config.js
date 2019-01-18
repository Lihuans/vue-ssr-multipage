const env = process.env.NODE_ENV;
let config;
if (env !== 'production') { //测试或本地环境
	config = {
		host: 'https://hrtest.shixiseng.com',
		baseUrl: 'https://hrtest.shixiseng.com/api/v1'
	};
} else { //线上环境接口
	config = {
		host: 'https://hr.shixiseng.com',
		baseUrl: 'https://hr.shixiseng.com/api/v1'
	};
}
module.exports = config;
