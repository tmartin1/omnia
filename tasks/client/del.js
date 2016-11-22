import gulp from 'gulp';
import del from 'del';
import { path, tasks } from './const';

gulp.task(tasks.DEL_DIST, () => {
    del.sync([path.ROOT + 'dist']);
});

gulp.task(tasks.CLIENT_DEL_DIST, () => {
    del.sync([path.DIST]);
});
