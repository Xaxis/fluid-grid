module.exports = function(grunt) {
  grunt.initConfig ({

    /**
     * Import project info
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Set project banner
     */
    tag: {
      banner: '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.title %>\n' +
      ' * @author <%= pkg.author %>\n' +
      ' * @version <%= pkg.version %>\n' +
      ' * @license <%= pkg.license %>\n' +
      ' */\n'
    },

    /**
     * Compile SASS
     */
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'test/css/style.min.css': 'sass/style.scss'
        }
      }
    },

    /**
     * Watch for file changes
     */
    watch: {
      options: {
        livereload: true
      },
      test: {
        files: [
          'test/*.html'
        ]
      },
      sass: {
        files: [
          'sass/*.scss'
        ],
        options: {
          spawn: false
        },
        tasks: ['sass']
      }
    }
  });

  /**
   * Load npm tasks
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
   * Deffine tasks
   */
  grunt.registerTask('default', [
    'sass',
    'watch'
  ]);
};
