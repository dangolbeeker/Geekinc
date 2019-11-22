//Elements

const nav = documents.getElementById('nav');
const menu = documents.getElementById('menu');


//Anime.js
//Line Drawing Intro SVG
anime({
    targets:'',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternative',
    loop:true

});