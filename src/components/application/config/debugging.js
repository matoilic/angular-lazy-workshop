function debugConfig($logProvider, $compileProvider) {
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
}

export default [
    '$logProvider',
    '$compileProvider',
    debugConfig
];
