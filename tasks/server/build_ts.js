import gulp from 'gulp';
import tsc from 'gulp-typescript';
import { path, tasks } from '../const';

const TS_CONFIG = path.ROOT + './tsconfig-server.json';

gulp.task(tasks.SERVER_BUILD_TS, () => {
    const tsProject = tsc.createProject(TS_CONFIG);

    return tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest(path.DIST));
});
