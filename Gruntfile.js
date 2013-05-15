/*global module:false*/
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
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
		concat: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
						'* <%= pkg.homepage %>/\n' +
						'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>; Licensed <%= pkg.license %> */\n'
			},
			iocss: {
				files: {
					'build/css/io.css': 'build/css/io.css'
				}
			}
		},
		copy: {
			examples: {
				expand: true,	
				cwd: 'examples/',
				src: ['**'],
				dest: 'build/examples/'
			}
		},
		watch: {
			stylus: {
				files: ['styl/*', 'styl/themes/*'],
				tasks: 'stylus'
			},
			examples: {
				files: [ 'examples/**' ],
				tasks: 'copy'
			}
		}
	});
	
	// Default task
	grunt.registerTask('default', ['stylus', 'concat', 'copy']);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
