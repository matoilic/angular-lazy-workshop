function toggleAnimations($animate) {
    $animate.enabled(location.href.indexOf('noAnimate') === -1);
}

export default [
    '$animate',
    toggleAnimations
];
