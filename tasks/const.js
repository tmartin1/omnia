// export const config = require('../tsconfig.json');

export const path = {
    // General paths
    DIST: './dist/',
    ROOT: './',
    TEST: './tests/',

    // Client paths
    CLIENT: './client/',
    CLIENT_DEV: './client/dev/',
    CLIENT_DIST: './client/dist/',
    DIST_CLIENT: './dist/client/',

    // Server paths
    SERVER: './server/',
    SERVER_DIST: './server/dist/',
    DIST_SERVER: './dist/server/'
}

export const tasks = {
    // General tasks
    DEL_DIST: 'del:dist',
    BUILD_TS: 'compile_ts',

    // Client tasks
    CLIENT_BUILD_DEV: 'client.build:dev',
    CLIENT_BUILD_DIST: 'client.build:dist',

    CLIENT_CSS_DIST: 'client.build_css:dist',
    CLIENT_JS_DIST: 'client.build_js:dist',
    CLIENT_VIEWS_DIST: 'client.views:dist',
    CLIENT_IMAGE_DIST: 'client.imgs:dist',
    CLIENT_DEL_DIST: 'client.del:dist',

    CLIENT_COPY: 'client.copy',

    CLIENT_UNIT_TEST: 'client.unit_test',
    CLIENT_COVERAGE: 'client.coverage',

    CLIENT_RELOAD: 'client.reload',

    CLIENT_WATCH: 'client.watch',

    CLIENT_BUILD_TS: 'client.compile_ts',

    // Server tasks
    SERVER_BUILD_TS: 'server.compile_ts'
}
