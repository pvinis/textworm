const multipleEntry = require('react-app-rewire-multiple-entry')([
	{
	  entry: 'src/entry/popup.js',
	  template: 'public/popup.html',
	  outPath: '/popup.html'
	},
	{
	  entry: 'src/entry/options.js',
	  template: 'public/options.html',
	  outPath: '/options.html'
	},
  ]);

const noChunking = require('react-app-rewire-micro-frontends')
