const multipleEntry = require('react-app-rewire-multiple-entry')([
	{
	  entry: 'src/entry/popup.js',
	  outPath: '/popup.html'
	},
	{
	  entry: 'src/entry/options.js',
	  outPath: '/options.html'
	},
  ]);


module.exports = {
webpack: function(config, env) {
	// firefox doesnt like it with the runtime chunk 🤷‍♂️
config.optimization.runtimeChunk = false;

	  multipleEntry.addMultiEntry(config);

	  return config;
	}
  }
