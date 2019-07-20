const path = require('path')

module.exports = {
	configureWebpack: {
		devtool: 'source-map'
	},
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        'D:\\projects\\startupz\\src\\styles\\_global.scss'
      ],
      preProcessor: 'scss'
    },
    ghPages: {
      message: 'Update Github Pages'
    }
  },
	publicPath: process.env.NODE_ENV === 'production'
		? '/startupz/'
		: '/'
}
