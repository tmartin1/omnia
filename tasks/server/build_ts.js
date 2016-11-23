import gulp from 'gulp';
import tsc from 'gulp-typescript';
import { path, tasks } from '../const';

const TS_CONFIG = path.ROOT + 'tsconfig.json';

gulp.task(tasks.SEVER_BUILD_TS, () => {
    const _tsProject = tsc.createProject(TS_CONFIG);

    return _tsProject.src()
    .pipe(tsProject()).js
    .pipe(gulp.dest('.'));
});
