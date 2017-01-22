const fs = require('fs');

const packageInfo = JSON.parse(fs.readFileSync('package.json').toString());
const templatePackageInfo = JSON.parse(
    fs
        .readFileSync(require.resolve('generator-angular-lazy/app/templates/core/_package.json'))
        .toString()
        .replace(/<%[^%]+%>/g, '')
);

const jspmDependencies = packageInfo.jspm.dependencies;

Object.keys(jspmDependencies).forEach((packageName) => {
    // We don't want to transfer SystemJS specific dependencies
    if (!jspmDependencies[packageName].includes('systemjs/')) {
        const version = jspmDependencies[packageName].split('@').pop();

        packageInfo.dependencies[packageName] = version;
    }
});

if (packageInfo.jspm.devDependencies['angular-mocks']) {
    const version = packageInfo.jspm.devDependencies['angular-mocks'].split('@').pop();

    packageInfo.devDependencies['angular-mocks'] = version;
}

const templateDevDependencies = templatePackageInfo.devDependencies;
const appDevDependencies = packageInfo.devDependencies;

Object.keys(templateDevDependencies).forEach((packageName) => {
    appDevDependencies[packageName] = templateDevDependencies[packageName];
});

packageInfo.scripts = templatePackageInfo.scripts;

delete packageInfo.jspm;

fs.writeFileSync('package.json', JSON.stringify(packageInfo, null, 2));
