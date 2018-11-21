module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            uglify: {
                files: [
                    'app/**/*.js',
                ],
                tasks: ['uglify']
            }
        },

        sass: {
            dist: {
                files: {
                    'assets/css/main.css': 'assets/scss/main.scss'
                }
            }
        },

        cssmin: {
            options: {
                restructuring: false
            },
            my_target: {
                files: {
                    'assets/main.min.css': 'assets/css/main.css'
                }
            }
        },

        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: {
                    'assets/main.min.js': [
                        'app/**/*.js'
                    ]
                }
            }
        },

        connect: {
			server: {
				options: {
					port: 8000,
					base: ''
				}
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect:server', 'watch']);
};
