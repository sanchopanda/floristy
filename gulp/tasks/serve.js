const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const imageWebp = require('./imageWebp')
const svgSprite = require('./svgSprite')
const styles = require('./styles')
const twig2html = require('./twig2html')
const script = require('./script')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
  server.init({
    server: 'docs',
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch('src/img/**/*.{gif,png,jpg,svg}', gulp.series(imageMinify, readyReload))
  gulp.watch('src/img/**/*.{png,jpg}', gulp.series(imageWebp, readyReload))
  gulp.watch('src/img/sprite/*.svg', gulp.series(svgSprite, readyReload))
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('docs/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
  gulp.watch('src/pages/**/*.twig', gulp.series(twig2html, readyReload))

  return cb()
}
