var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');

gulp.task('deploy', function() {
  return gulp.src( ['public/**/*', 'build/app.js'])
    .pipe(deploy());
});

var tsProject = ts.createProject('./tsconfig.json');

gulp.task('build', function(){
  return tsProject.src()
    .pipe(tsProject());
});

gulp.task('watch:test', function(){
  return gulp.watch( ['src/**/*.ts', 'tests/**/*.ts'], [ 'test']);
});

gulp.task('test', function() {
  return gulp.src( ['tests/**/*.ts'], { base: '.' })
    .pipe(ts({ "module": "commonjs"} ))
    .pipe(gulp.dest('.'))
    .pipe(mocha({
        reporter: 'progress'
    }));
});

gulp.task('watch:local', function(){
  return gulp.watch( ['public/**/*', 'build/app.js'], [ 'local']);
});
  
gulp.task('local', function(){
  return gulp.src(  ['public/**/*', 'build/app.js'])
      .pipe(gulp.dest('local'));
});