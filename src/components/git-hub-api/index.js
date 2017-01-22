import angular from 'angular';
import constants from './constants.json';
import gitHubApiProvider from './git-hub-api-provider';

const dependencies = [

];

const app = angular
    .module('git-hub-api-component', dependencies)
    .provider('gitHubApi', gitHubApiProvider);

Object.keys(constants).forEach((constantName) => {
    app.constant(constantName, constants[constantName]);
});

export default app;
