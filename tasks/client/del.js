import gulp from 'gulp';
import del from 'del';
import { path, tasks } from './const';

gulp.task(tasks.CLIENT_DEL_DIST, () => {
    return del.sync([path.DIST]);
});
