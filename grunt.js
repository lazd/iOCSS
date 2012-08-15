/*global module:false*/
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-stylus');

	// Project configuration.
	grunt.initConfig({
		meta: {
			version: '0.1.0',
			appName: 'iOCSS',
			appWebSite: 'lazd.github.com/iocss'
		},
		stylus: {
			compile: {
				options: {
					'paths': [
					    'node_modules/',    // nib
					    'styl/'             // Individual components
					]
				},
				files: {
					'build/css/io.css': 'styl/iOCSS.styl'
				}
			}
		},
		watch: {
			stylus: {
				files: ['styl/*'],
				tasks: 'stylus'
			}
		}
	});
    
	// Default task
	grunt.registerTask('default', 'stylus');
};
