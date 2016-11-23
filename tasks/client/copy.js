import gulp from 'gulp';
import { path, tasks } from '../const';

gulp.task(tasks.CLIENT_COPY, () => {
    return gulp.src(path.CLIENT_DEV + '**/*')
    .pipe(gulp.dest(path.CLIENT_DIST));
});
