import angular from 'angular';
import 'angular-translate';
import en from './en';

const dependencies = [
    'pascalprecht.translate'
];

export default angular
    .module('git-hub-file-browser-component-translations', dependencies)
    .config(en);
