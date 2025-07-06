const { src, dest, watch, series, parallel } = require('gulp')
const fileInclude = require('gulp-file-include')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const cleanCSS = require('gulp-clean-css')
const terser = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

const replace = require('gulp-replace')
const browserSync = require('browser-sync').create()
const { deleteAsync } = require('del')
const inject = require('gulp-inject')

const paths = {
  html: {
    src: 'src/pages/**/*.html',
    watch: 'src/**/*.{html,js}',
    dest: 'dist'
  },
  scss: {
    src: 'src/index.scss',
    watch: 'src/**/*.{scss,css}',
    dest: 'dist/css'
  },
  js: {
    src: 'src/**/*.js',
    watch: 'src/**/*.js',
    dest: 'dist/js'
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets'
  }
}
function clean() {
  return deleteAsync(['dist'])
}

function html() {
  const cssFiles = src('dist/css/*.css', { read: false })
  const jsFiles = src('dist/js/*.js', { read: false })

  return src(['src/index.html', 'src/pages/**/*.html'], { base: 'src' })
    .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
    .pipe(replace(/(\.\.\/)+(assets|pages)\//g, '$2/'))
    .pipe(
      inject(cssFiles, {
        ignorePath: 'dist',
        addRootSlash: false
      })
    )
    .pipe(
      inject(jsFiles, {
        ignorePath: 'dist',
        addRootSlash: false
      })
    )
    .pipe(dest('dist'))
}

function assets() {
  return src(paths.assets.src).pipe(dest(paths.assets.dest))
}

function styles() {
  return src(['src/**/*.scss', 'src/**/*.css'])
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.min.css'))
    .pipe(cleanCSS())
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream())
}

function scripts() {
  return src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.js.dest))
    .pipe(browserSync.stream())
}

function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })

  watch(paths.html.watch, html).on('change', browserSync.reload)
  watch(paths.scss.watch, styles)
  watch(paths.js.watch, scripts).on('change', browserSync.reload)
  watch(paths.assets.src, assets).on('change', browserSync.reload)
}

exports.clean = clean
exports.html = html
exports.styles = styles
exports.scripts = scripts
exports.serve = serve

const build = series(clean, series(scripts, styles, assets, html))

exports.default = series(build, serve)

exports.build = build
