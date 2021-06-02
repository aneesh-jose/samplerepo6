module.exports = {
	configureWebpack: {
		devServer: {
			watchOptions: {
				aggregateTimeout: 100,
				poll: 100
			},
			allowedHosts: [
				".bagelstudio.co",
				".bageldb.com"
			]
		}
	}
}