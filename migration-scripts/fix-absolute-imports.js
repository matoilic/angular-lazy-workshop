const fs = require('fs');
const packageInfo = require('../package.json');
const path = require('path');

const dependencies = Object
    .keys(packageInfo.dependencies)
    .concat(Object.keys(packageInfo.devDependencies));

function resolveImport(importPath) {
    const possibilities = [
        `src/${importPath}.js`,
        `src/${importPath}/index.js`,
        `src/${importPath}`
    ];

    for (let i = 0; i < possibilities.length; i++) {
        try {
            fs.statSync(possibilities[i]);

            return possibilities[i];
        } catch (err) { } // eslint-disable-line no-empty
    }

    throw new Error(`Could not resolve "${importPath}"`);
}

module.exports = function apply(file, api /* , options */) {
    const j = api.jscodeshift;

    return j(file.source)
        .find(j.ImportDeclaration)
        .forEach((node) => {
            const importSource = node.value.source.rawValue;
            const packageName = importSource.split('/').shift();

            if (importSource[0] !== '.' && !dependencies.includes(packageName)) {
                const ownFilename = path.resolve(file.path);
                const targetFilename = path.resolve(resolveImport(importSource));
                const relativeTargetFilename = path.relative(ownFilename, targetFilename);
                const parts = relativeTargetFilename.split('/');

                parts.shift();

                if (parts[0][0] !== '   .') {
                    parts.unshift('.');
                }

                const filename = parts.pop();
                if (filename.includes('index.js')) {
                    parts.push(filename.substr(0, filename.lastIndexOf('.')));
                } else if (filename.endsWith('.scss') || filename.endsWith('.css')) {
                    parts.push(filename);
                }

                node.value.source.value = parts.join('/'); // eslint-disable-line no-param-reassign
            }
        })
        .toSource({
            quote: 'single',
            lineTerminator: '\n',
            wrapColumn: 120
        });
};
