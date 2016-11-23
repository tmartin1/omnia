import gulp from 'gulp';
import browserSync from 'browser-sync';
import { path, tasks } from '../const';

const TS = path.CLIENT_DEV + '**/*.ts';
const CSS = path.CLIENT_DEV + '**/*.css';
const HTML = path.CLIENT_DEV + '**/*.html';

gulp.task(tasks.CLIENT_RELOAD, () => {
  return browserSync.reload();
});

gulp.task(tasks.CLIENT_WATCH, [tasks.CLIENT_BUILD_TS], () => {
    browserSync({
        proxy: 'https://localhost:3333',
        reloadDelay: 1000
    });

    const _watchable = [TS, CSS, HTML];

  return gulp.watch(_watchable, [tasks.CLIENT_BUILD_TS, tasks.CLIENT_RELOAD]);
});
