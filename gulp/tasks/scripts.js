const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', ['modernizr'], (callback) => {
    webpack(require('../../webpack.config'), (err, stats) => {
        if(err) {
            console.log(err.toString());
        }
        console.log('Hooray, webpack works!' + stats.toString());
        callback();
    });
});