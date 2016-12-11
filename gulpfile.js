var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');

gulp.task('deploy', function() {
  return gulp.src( ['public/**/*', 'build/app.js'])
    .pipe(deploy());
});

var tsProject = ts.createProject('./tsconfig.json');
gulp.task('test', function() {
  gulp.src( ['tests/**/*.ts'], { base: '.' })
    .pipe(tsProject());
    
  return gulp.src( [ 'tests/**/*.js'] )
    .pipe(mocha({
        reporter: 'progress'
    }));
});


