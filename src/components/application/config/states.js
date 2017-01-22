const states = [{
    name: 'app',
    url: '/',
    type: 'given'
}, {
    name: 'app.index',
    url: 'index',
    type: 'load',
    load: () => System.import('../../index-state/index'),
    prefetch: () => Promise.all([
        System.import('../../git-hub-readme/index'),
    ])
}, {
    name: 'app.repository',
    url: 'repository/:owner/:repo',
    type: 'load',
    load: () => System.import('../../repository-state/index')
}];

export default states;
