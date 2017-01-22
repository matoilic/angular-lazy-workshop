const fs = require('fs');
const path = require('path');

function fileExists(filename) {
    try {
        fs.statSync(filename);

        return true;
    } catch (err) { }

    return false;
}

module.exports = function apply(file, api /* , options */) {
    const j = api.jscodeshift;

    return j(file.source)
        .find(j.ImportDeclaration)
        .forEach((node) => {
            const importSource = node.value.source.rawValue;
            let newImportSource = importSource;

            if (newImportSource.includes('!')) {
                newImportSource = newImportSource.slice(0, newImportSource.indexOf('!'));
            }

            if (newImportSource.endsWith('.css')) {
                let targetFilename;
                if (newImportSource[0] === '.') {
                    targetFilename = path.join(
                        path.dirname(file.path),
                        newImportSource
                    );
                } else {
                    targetFilename = path.join('src', newImportSource);
                }

                if (!fileExists(newImportSource)) {
                    newImportSource = `${newImportSource.slice(0, -4)}.scss`;
                }
            }

            node.value.source.value = newImportSource;
        })
        .toSource({
            quote: 'single',
            lineTerminator: '\n',
            wrapColumn: 120
        });
};
