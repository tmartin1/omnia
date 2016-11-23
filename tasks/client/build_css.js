import gulp from 'gulp';
import cssmin from 'gulp-clean-css';
import { path, tasks } from '../const';

const CSS = path.CLIENT_DIST + '**/*.css';

gulp.task(tasks.CLIENT_CSS_DIST, () => {
    return gulp.src(CSS, { base: path.CLIENT_DIST })
    .pipe(cssmin())
    .pipe(gulp.dest(path.CLIENT_DIST));
});
