import gulp from 'gulp';
import del from 'del';
import { path, tasks } from '../const';

gulp.task(tasks.DEL_DIST, () => {
    del.sync([
        path.DIST,
        path.CLIENT_DIST,
        path.SERVER_DIST
    ]);
});

gulp.task(tasks.CLIENT_DEL_DIST, () => {
    del.sync([path.CLIENT_DIST]);
});
