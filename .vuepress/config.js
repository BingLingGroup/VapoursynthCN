const {fs, path} = require('@vuepress/shared-utils');
// https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
module.exports = ctx => ({
    dest: '.vuepress/dist',
    title: 'VapourSynth 中文',
    plugins: [
        ['@vuepress/back-to-top', true],
    ]
});