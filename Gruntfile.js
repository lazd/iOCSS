/*global module:false*/
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
		meta: {
			version: '<%= pkg.version %>',
			appName: '<%= pkg.name %>',
			appWebSite: '<%= pkg.homepage %>'
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
				files: ['styl/*', 'styl/themes/*'],
				tasks: 'stylus'
			}
		}
	});
	
	// Default task
	grunt.registerTask('default', 'stylus');

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
