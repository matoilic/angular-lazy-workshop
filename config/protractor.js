const protractorBase = __dirname + '/../node_modules/protractor/';
const webdriverVersions = require(protractorBase + 'config.json').webdriverVersions;

const capabilities = [
    {
        browserName: 'chrome'
    },
    {
        browserName: 'firefox'
    }
];

if (process.platform === 'win32') {
    capabilities.push({
        browserName: 'internet explorer',
        platform: 'ANY',
        version: '11'
    });
} else if (process.platform === 'darwin') {
    capabilities.push({
        browserName: 'safari'
    });
}

module.exports.config = {
    multiCapabilities: capabilities,
    seleniumServerJar: protractorBase + 'selenium/selenium-server-standalone-' + webdriverVersions.selenium + '.jar',
    baseUrl: 'http://localhost:8089/index.html?noAnimate=1#',
    rootElement: '#applicationContainer',
    framework: 'jasmine2',
    specs: ['../build/**/*-test.js'],
    maxSessions: 1
};
