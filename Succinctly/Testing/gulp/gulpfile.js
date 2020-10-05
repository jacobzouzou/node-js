const gulp= require('gulp');

gulp.task('logMsg', (done) => { 
     console.log('gulp! It works') ;
     done();
}) ;

//use mocha-test : gulp plugin
const mocha = require('gulp-mocha') ;
gulp.task('mocha_test',(done)=>{
     return gulp.src('../testSimpleMath.js')
          .pipe(mocha({reporter:'spec',bail:true}))
          .once('error',(err)=>{console.log(err); process.exit(1)})
          .once('end',()=>{
               console.log('Mocha math api test is finished !'); 
               done();
          });
});
// gulp.task('default', gulp.series('one','mocha_test'));

//Launch application
const nodemon = require('gulp-nodemon');
gulp.task('dev-mode', (done) => {   
     nodemon({script: '../../Express/DataAccess/sqlServer.js'});
     done();
}); 
 
// //eslint
// const eslint= require('gulp-eslint');
// gulp.task('eslint', (done) => {   
//      return gulp.src(['../../Modules/*.js', '../../DataAccess/*.js'])     
//      .pipe(eslint('eslint.config.json'))
//      .pipe(eslint.format())     
//      .pipe(eslint.failAfterError()); 
//      done();
//  }); 

gulp.task('default', gulp.series('logMsg','mocha_test','dev-mode'));
