import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import rev from 'gulp-rev-append';
import { path, tasks } from '../const';

const VIEWS = path.CLIENT_DIST + '**/*.html';

gulp.task(tasks.CLIENT_VIEWS_DIST, () => {
    return gulp.src(VIEWS, { base: path.CLIENT_DIST })
    .pipe(rev())
    .pipe(htmlmin({
        collapseWhitespace: true,
        caseSensitive: true
    }))
    .pipe(gulp.dest(path.CLIENT_DIST));
});
