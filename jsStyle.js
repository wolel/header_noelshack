anime.timeline({loop: true})
    .add({
        targets: '.titre',
        opacity: [0,2],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
    }).add({
    targets: '.titre',
    opacity: 3,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});