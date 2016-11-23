import gulp from 'gulp';
import imageMin from 'gulp-imagemin';
import { path, tasks } from '../const';

const IMAGES = path.CLIENT_DIST + '**/*.{png,jpg,jpeg,svg,gif}';

gulp.task(tasks.CLIENT_IMAGE_DIST, () => {
    return gulp.src(IMAGES, { base: path.CLIENT_DIST })
    .pipe(imageMin())
    .pipe(gulp.dest(path.CLIENT_DIST));
});
