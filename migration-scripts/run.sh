#!/bin/bash

npm i --save-dev generator-angular-lazy@beta angular-lazy@beta eslint-config-angular-lazy@0.2 fs-extra jscodeshift

node migration-scripts/update-package-json.js
npm i

node migration-scripts/copy-files.js

$PWD/node_modules/.bin/jscodeshift -t migration-scripts/fix-systemjs-plugin-imports.js src
$PWD/node_modules/.bin/jscodeshift -t migration-scripts/fix-absolute-imports.js src
$PWD/node_modules/.bin/jscodeshift -t migration-scripts/update-state-definitions.js src/components/application/config/states.js
$PWD/node_modules/.bin/jscodeshift -t migration-scripts/fix-states-import.js src/components/application/config/routing.js

npm un --save-dev fs-extra jscodeshift
