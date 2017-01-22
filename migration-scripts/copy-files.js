const fs = require('fs-extra');
const path = require('path');

const srcDir = path.dirname(require.resolve('generator-angular-lazy/app/templates/core/_package.json'));

const files = {
    '_.babelrc': '.babelrc',
    '_.eslintignore': '.eslintignore',
    '_.eslintrc.json': '.eslintrc.json',
    config: 'config',
    scripts: 'scripts',
    'src/index.html': 'src/index.html',
    'src/index.test.js': 'src/index.test.js',
    'src/components/application/config/states.js': 'src/components/application/config/states.js'
};

Object.keys(files).forEach((src) => {
    fs.copySync(
        path.join(srcDir, src),
        path.join(files[src]),
        { overwrite: true }
    );
});
