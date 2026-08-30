module.exports = {
	apps: [{
		script: './server.js',
		watch: true,
		watch_delay: 1000,
		ignore_watch: ['node_modules', 'client'],
	}]
};