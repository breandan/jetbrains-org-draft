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
                    remote: 'https://github.com/breandan/jetbrains-org',
                    branch: 'gh-pages'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-build-control');

    grunt.registerTask('build', ['exec:jekyll']);
    grunt.registerTask('deploy', ['build', 'buildcontrol:pages']);
    grunt.registerTask('default', ['deploy']);
};