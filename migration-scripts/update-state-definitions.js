const fs = require('fs-extra');

module.exports = function (file, api /* , options */) {
    const j = api.jscodeshift;
    const states = fs.readJsonSync('src/components/application/config/states.json');

    return j(file.source)
        .find(j.VariableDeclarator, {
            id: {
                name: 'states'
            }
        })
        .forEach((node) => {
            node.value.init.elements = states.map((state) => {
                if (state.name === 'app') {
                    return j.objectExpression([
                        j.property(
                            'init',
                            j.identifier('name'),
                            j.literal(state.name)
                        ),
                        j.property(
                            'init',
                            j.identifier('url'),
                            j.literal(state.url)
                        ),
                        j.property(
                            'init',
                            j.identifier('type'),
                            j.literal('given')
                        )
                    ]);
                } else {
                    return j.objectExpression([
                        j.property(
                            'init',
                            j.identifier('name'),
                            j.literal(state.name)
                        ),
                        j.property(
                            'init',
                            j.identifier('url'),
                            j.literal(state.url)
                        ),
                        j.property(
                            'init',
                            j.identifier('type'),
                            j.literal('load')
                        ),
                        j.property(
                            'init',
                            j.identifier('load'),
                            j.arrowFunctionExpression(
                                [],
                                j.callExpression(
                                    j.memberExpression(
                                        j.identifier('System'),
                                        j.identifier('import')
                                    ),
                                    [j.literal(`../../${state.src}`)]
                                )
                            )
                        )
                    ]);
                }
            });
        })
        .toSource({
            quote: 'single',
            lineTerminator: '\n',
            wrapColumn: 120
        });
};
