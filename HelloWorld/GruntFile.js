module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src: ['**/*.ts', "!node_modules/**"],
                   options: {
                   module: 'commonjs',
                   target: 'es6',
                   sourceMap: true
                   }
            }
        },
        watch: {
        files: '**/*.ts',
                    tasks: ['typescript']
                    }
      });

      //grunt.registerTask('default', ['typescript']);
      grunt.registerTask('default', ['watch']);
    }

