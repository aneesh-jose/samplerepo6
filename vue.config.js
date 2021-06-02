module.exports = {
	devServer: {
		watchOptions: {
			aggregateTimeout: 50,
			poll: 50
		},
		allowedHosts: [
			".bagelstudio.co",
			".bageldb.com"
		]
	}
}