import gulp from 'gulp';
import tsc from 'gulp-typescript';
import rename from 'gulp-rename';
import del from 'del';
import { path, tasks } from '../const';

const TS_CONFIG = path.ROOT + 'tsconfig.json';

gulp.task(tasks.CLIENT_BUILD_TS, () => {
    const _tsProject = tsc.createProject(TS_CONFIG);
    const unnammed = [];

    return _tsProject.src()
    .pipe(_tsProject()).js
    // .pipe(rename((file) => {
    //     const fileName = '' + file.dirname + '/' + file.basename + file.extname;
    //     if (fileName && fileName.match(/js$/)) {
    //         console.log('');
    //         console.log(fileName);
    //         del(path.ROOT + fileName);
    //     }
    // 
    //     file.extname = '.compiled.js';
    //     console.log(file.dirname + '/' + file.basename + file.extname);
    // }))
    .pipe(gulp.dest('.'));
});
