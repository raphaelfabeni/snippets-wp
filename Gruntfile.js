module.exports = function(grunt) {

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),

        globalConfig: {
            files: [
                '*.php',
                '*.html',
                '_includes/*.html'
            ],

            // Projects assets and build paths for .css and .scss files
            dev_css: '_assets/scss',
            build_css: 'build/css',

            // Projects assets and build paths for .js files
            dev_js: '_assets/js',
            build_js: 'build/js'

        },

        // -- Concat config ----------------------------------------------------------
        concat: {

            // Project files
            dev: {
                src: [
                    '_components/jquery/jquery.js', // jQuery lib
                    '_components/devbridge-autocomplete/dist/jquery.autocomplete.min.js', // Autocomplete lib
                    '<%= globalConfig.dev_js %>/scripts.js' // Project scripts
                ],
                dest: '<%= globalConfig.build_js %>/all.js',
            }

        },

        // -- Uglify config ----------------------------------------------------------
        uglify: {

            // Start files
            modernizr: {
                src: '_components/modernizr/modernizr.js',
                dest: '<%= globalConfig.build_js %>/libs/modernizr.min.js'
            },

            // Project files
            dev: {
                src: '<%= globalConfig.build_js %>/all.js',
                dest: '<%= globalConfig.build_js %>/all.min.js'
            }

        },

        // -- JShint config ----------------------------------------------------------
        jshint: {

            //Project files
            dev: ['<%= globalConfig.dev_js %>/scripts.js'],
                options: {
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                }
            }

        },

        // -- SASS config ------------------------------------------------------------
        sass : {

            // Project files
            dev : {
                options : {
                    style : 'expanded',
                    noCache: true
                },
                files : {
                    '<%= globalConfig.build_css %>/main.min.css' : '<%= globalConfig.dev_css %>/main.scss'
                }
            }

        },

        // -- Watch config -----------------------------------------------------------
        watch: {

            // -- Livereload config --------------------------------------------------
            livereload: {
                options: { livereload: true },
                files: [
                    '<%= globalConfig.files %>',
                    '<%= globalConfig.build_css %>/*.css'
                ]
            },

            // -- Project files config (CSS and JS) ------------------------------------
            scripts_dev: {
                files: ['<%= concat.dev.src %>'],
                tasks: ['jshint:dev', 'concat:dev', 'uglify:dev'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },

            css_dev: {
                files: [
                    '<%= globalConfig.dev_css %>/*.scss',
                    '<%= globalConfig.dev_css %>/**/*.scss'
                ],
                tasks: ['sass:dev']
            }

        }

    };

    grunt.initConfig(gruntConfig);

    // Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch', 'concat', 'uglify', 'jshint', 'sass'] );

    // Watch task
    grunt.registerTask( 'w', [ 'watch' ] );

    // Start
    grunt.registerTask( 'init', [ 'uglify:modernizr', 'uglify:respond' ] );

    // CSS task
    grunt.registerTask( 'css', [ 'sass' ] );

    // JS task
    grunt.registerTask( 'js', [ 'concat', 'uglify', 'jshint' ] );

    // Start taks
    grunt.registerTask( 'init', [ 'uglify:modernizr'] );
};
