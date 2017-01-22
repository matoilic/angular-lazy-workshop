module.exports = function apply(file, api /* , options */) {
    const j = api.jscodeshift;

    return j(file.source)
        .find(j.ImportDeclaration)
        .forEach((node) => {
            const importSource = node.value.source.rawValue;

            if (importSource === './states.json') {
                node.value.source.value = './states';
            }
        })
        .toSource({
            quote: 'single',
            lineTerminator: '\n',
            wrapColumn: 120
        });
};
