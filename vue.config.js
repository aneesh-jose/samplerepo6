module.exports = {
	devServer: {
		watchOptions: {
			aggregateTimeout: 100,
			poll: 500
		},
		allowedHosts: [
			".bagelstudio.co",
			".bageldb.com"
		]
	}
}