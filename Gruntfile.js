// Generated on 2014-07-31 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var options = require('./package.json');

    // Define the configuration for all the tasks
    grunt.initConfig({

        pack: {
            root: options.root,
            dist: 'dist'
        },
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%=pack.root%>/{,*/}*.js'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= pack.root %>/{,*/}*.html',
                    '<%= pack.root %>/views/{,*/}*.html',
                    '<%= pack.root %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= pack.root %>'
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            src: [


            ],
            server: '.tmp'
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.

        concat: {
            js: {
                src: [
                    'app/scripts/app.js',
                    'app/scripts/services/{,**/}*.js',
                    'app/scripts/controllers/{,**/}*.js'
                ],
                dest: 'app/scripts/concat.js'
            },
            bower: {
                src: [

                ],
                dest: 'app/scripts/bowerConcat.js'
            },
            css: {
                src: [
                ],
                dest: 'app/styles/stylesConcat.css',
                options: {
                    separator: ';'
                }
            }
        },
        cssmin: {
            css:{
                src: '',
                dest: ''
            }
        },
        uglify: {
            js: {
                src: 'app/scripts/concat.js',
                dest: 'app/scripts/concat.min.js'
            },
            bower: {
                src: 'app/scripts/bowerConcat.js',
                dest: 'app/scripts/bowerConcat.min.js'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/styles/nonMinifiedImg',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: 'app/styles/images'
                }]
            }
        },

        /** Agregando ng-constant para definicion de variables globales **/
        ngconstant: {
            // Options for all targets
            options: {
                space: '  ',
                wrap: '"use strict";\n\n {%= __ngModule %}',
                name: 'config'
            },
            // Environment targets
            development: {
                options: {
                    dest: '<%= yeoman.app %>/scripts/config.js'
                },
                constants: {
                    ENV: {
                        name: 'development',
                        baseUrl: 'http://127.0.0.1:3000',
                        baseUploadFolder: '/Users/fr3d0/projects/uploads/railsDpmUploads'
                    }
                }
            },
            production: {
                options: {
                    dest: '<%= yeoman.app %>/scripts/config.js'
                },
                constants: {
                    ENV: {
                        name: 'production',
                        baseUrl: 'http://192.168.2.45',
                        baseDownloadFolder: '/archivos_dpm'
                    }
                }
            }
        }
        /** Fin de variables globales**/
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('default', [
        'clean',
        'concat',
        'uglify',
        'cssmin',
        'ngmin'
    ]);
    grunt.registerTask('development', [
        'ngconstant:development' //Agregado para las variables globales
    ]);
    grunt.registerTask('production', [
        'ngconstant:production' //Agregado para las variables globales
    ]);
};
