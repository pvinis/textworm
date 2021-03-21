const multipleEntry = require('react-app-rewire-multiple-entry')([
	{ entry: 'src/entry/popup.ts', outPath: '/popup.html' },
	{ entry: 'src/entry/options.ts', outPath: '/options.html' },
])


module.exports = {
	webpack: function(config, _env) {
		// firefox doesnt like it with the runtime chunk 🤷‍♂️
		config.optimization.runtimeChunk = false

		multipleEntry.addMultiEntry(config)
		// we don't need the main entry point, so we can remove `index` and `App`
		delete config.entry.main

		return config
	},
}
