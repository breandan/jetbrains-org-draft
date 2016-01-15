module.exports = function(grunt) {

    grunt.initConfig({
        exec: {
            jekyll: {
                cmd: 'jekyll build --trace'
            }
        },
        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'git@github.com:tscholak/tscholak.github.io.git',
                    branch: 'gh-pages'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-build-control');

    grunt.registerTask('build', ['copy', 'exec:jekyll']);
    grunt.registerTask('deploy', ['build', 'buildcontrol:pages']);
    grunt.registerTask('default', ['deploy']);
};