const gulp = require ('gulp')
const watch = require ('gulp-watch')
const webserver = require ('gulp-webserver')

/* O watch determina quais arquivos devem ser monitarados, caso haja alterações,
ele dispara com o 'gulp.start a task que irá refazer a construção na pasta public.*/
gulp.task('watch', () => {
watch('app/**/*.html', () => gulp.start('app.html'))
watch('app/**/*.css', () => gulp.start('app.css'))
watch('app/**/*.js', () => gulp.start('app.js'))
})

/*A task server configura o servidor de desenvolvimento, e tem a task 'watch' acima para
como pré requisito, ou seja, para rodar a primeira vez ela sempre irá rodar o watch antes,
e atualizar todos os arquivos em public. O livereload determina que sempre que a pasta
'public' for alterada, irá ser disparado o refresh da página no browser. o 'open'
significa que o browser irá ser aberto ou reaberto.
*/
gulp.task('server',['watch'], ()=>{
  return gulp.src('public').pipe(webserver({
    livereload: true,
    port: 3000,
    open: true
  }))

})
