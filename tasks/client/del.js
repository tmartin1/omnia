import gulp from 'gulp';
import del from 'del';
import { path, tasks } from '../const';

gulp.task(tasks.DEL_DIST, () => {
    return del([
        path.ROOT + 'dist',
        path.DIST
    ]);
});

gulp.task(tasks.CLIENT_DEL_DIST, () => {
    return del([path.DIST]);
});

gulp.task(tasks.CLEAN, () => {
    return del([
        path.DEV + '**/*.js',
        path.DEV + '**/*.js.map',
        path.SERVER + '**/*.js',
        path.SERVER + '**/*.js.map'
    ]);
});
