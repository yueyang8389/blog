const { src, dest, task, parallel } = require('gulp');
const imagemin = require('gulp-imagemin');

task('image', function () {
return src('docs/.vuepress/public/img/*/*.*')
      .pipe(imagemin({
        progressive: true
      }))
      .pipe(dest('docs/.vuepress/public/img'))
});

task('default', parallel('image'));