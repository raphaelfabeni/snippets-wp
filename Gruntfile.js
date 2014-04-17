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
            build_js: 'build/js',

            // Projects assets and build paths for img files
            dev_img: '_assets/img',
            build_img: 'build/img'
        },

        // -- Image min --------------------------------------------------------------
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.dev_img %>',
                    src:['*.{jpg,gif}'],
                    dest: '<%= globalConfig.build_img %>',
                }],
                options: {
                    cache: false
                }
            }
        },

        // -- SVG min -------------------------------------------------------------------
        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    convertPathData: { 
                        straightCurves: false
                    }
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.dev_img %>',
                    src: ['*.svg'],
                    dest: '<%= globalConfig.build_img %>',
                    ext: '.svg'
                }]
            }
        },

        // -- SVG 2 PNG ----------------------------------------------------------------
        svg2png: {
            all: {
                files: [{
                    src: ['<%= globalConfig.dev_img %>/*.svg'],
                    dest: '<%= globalConfig.build_img %>'
                }]
            }
        },

        // -- Copy img config -----------------------------------------------------------
        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['<%= globalConfig.dev_img %>/*.png'],
                    dest: '<%= globalConfig.build_img %>',
                    filter: 'isFile'
                }]
            }
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

            // -- Images config -------------------------------------------------------
            images: {
                files: [
                    '<%= globalConfig.dev_img %>/*.gif',
                    '<%= globalConfig.dev_img %>/*.jpg'
                ],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            copy: {
                files: [
                    '<%= globalConfig.dev_img %>/*.png'
                ],
                tasks: ['copy'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            // -- SVG config ----------------------------------------------------------
            svg: {
                files: ['<%= globalConfig.dev_img %>/*.svg'],
                tasks: ['svgmin', 'svg2png'],
                options: {
                    spawn: false,
                    livereload: true
                }
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch', 'concat', 'uglify', 'jshint', 'sass', 'imagemin', 'svgmin', 'svg2png', 'copy'] );

    // Watch task
    grunt.registerTask( 'w', [ 'watch' ] );

    // Start
    grunt.registerTask( 'init', [ 'uglify:modernizr', 'uglify:respond' ] );

    // CSS task
    grunt.registerTask( 'css', [ 'sass' ] );

    // JS task
    grunt.registerTask( 'js', [ 'concat', 'uglify', 'jshint' ] );

    // Compress images task
    grunt.registerTask( 'images', [ 'svgmin', 'svg2png', 'copy', 'imagemin' ] );

    // Start taks
    grunt.registerTask( 'init', [ 'uglify:modernizr'] );
};
