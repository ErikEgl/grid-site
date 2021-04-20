//ЭТО С КУРСА 1 по GULP

const gulp = require('gulp');
const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const watch = require('gulp-watch');


//ЭТО С КУРСА 1 по GULP

// gulp.task('sass-compile', function(){
//     return gulp.src('./scss/**/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError)) //если напишу ошибку в переменной, к примеру, то он мне покажет в терминале, где она
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./css')) //происходит создание папки CSS и файла .css в ней
// })
// gulp.task('watch', function(){ //now write in terminal gulp watch
//     gulp.watch('./scss/**/*.scss', gulp.series('sass-compile')) //будет происходить запуск sass-compile в случае, если он увидил изменения
// })



//ЭТО С КУРСА 2 по GULP
const browserSync = require('browser-sync').create();

//ЭТО С КУРСА 2 по GULP Kevin Powell
//compile scss into css
function style() {
  //1. Where is ma scss file
  return gulp.src('./scss/**/*.scss')
      //2. pass that file through sass compiler
      .pipe(sass().on('error', sass.logError))
      //3. where do I save the copiled CSS
      .pipe(gulp.dest('./css')) //происходит создание папки CSS и файла .css в ней
      //4. stream changes to all browsers even mobile
      .pipe(browserSync.stream());

}
function watch() {
    browserSync.init({ //инициализация синхронизации
        server: {
            baseDir: './' //базовая директория
        }
    });
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload) //для CSS не надо полной перезагрузки страницы, для HTML надо, поэтому reload
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}
exports.style = style; //now write in terminal gulp style
exports.watch = watch; //now write in terminal gulp watch
