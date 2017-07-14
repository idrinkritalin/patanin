// map the keys in an Object
var keyData = {
    q: {
        sound: new Howl({
            src: ['assets/audio/GuitarK02140B-03.mp3']
        })
    },
    w: {
        sound: new Howl({
            src: ['assets/audio/GuitarK02140F-03.mp3']
        })
    },
    e: {
        sound: new Howl({
            src: ['assets/audio/LeadK02140B-01.mp3']
        })
    },
    r: {
        sound: new Howl({
            src: ['assets/audio/LeadK02140B-02.mp3']
        })
    },
    t: {
        sound: new Howl({
            src: ['assets/audio/LeadK02140F-01.mp3']
        })
    },
    y: {
        sound: new Howl({
            src: ['assets/audio/LeadK02140F-02.mp3']
        })
    },
    u: {
        sound: new Howl({
            src: ['assets/audio/PadK02140B-01.mp3']
        })
    },
    i: {
        sound: new Howl({
            src: ['assets/audio/PadK02140B-02.mp3']
        })
    },
    o: {
        sound: new Howl({
            src: ['assets/audio/PadK02140F-01.mp3']
        })
    },
    p: {
        sound: new Howl({
            src: ['assets/audio/PadK02140F-02.mp3']
        })
    },
    a: {
        sound: new Howl({
            src: ['assets/audio/BeatAK02140-01.mp3']
        })
    },
    s: {
        sound: new Howl({
            src: ['assets/audio/BeatAK02140-02.mp3']
        })
    },
    d: {
        sound: new Howl({
            src: ['assets/audio/BeatAK02140-03.mp3']
        })
    },
    f: {
        sound: new Howl({
            src: ['assets/audio/BeatAK02140-04.mp3']
        })
    },
    g: {
        sound: new Howl({
            src: ['assets/audio/BeatBK02140-01.mp3']
        })
    },
    h: {
        sound: new Howl({
            src: ['assets/audio/BeatBK02140-02.mp3']
        })
    },
    j: {
        sound: new Howl({
            src: ['assets/audio/BeatBK02140-03.mp3']
        })
    },
    k: {
        sound: new Howl({
            src: ['assets/audio/BeatBK02140-04.mp3']
        })
    },
    l: {
        sound: new Howl({
            src: ['assets/audio/HitBK02-Kik.mp3']
        })
    },
    z: {
        sound: new Howl({
            src: ['assets/audio/BassK03150A-01.mp3']
        })
    },
    x: {
        sound: new Howl({
            src: ['assets/audio/BassK03150A-02.mp3']
        })
    },
    c: {
        sound: new Howl({
            src: ['assets/audio/BassK03150A-03.mp3']
        })
    },
    v: {
        sound: new Howl({
            src: ['assets/audio/BassK03150A-04.mp3']
        })
    },
    b: {
        sound: new Howl({
            src: ['assets/audio/BassK03150D-01.mp3']
        })
    },
    n: {
        sound: new Howl({
            src: ['assets/audio/BassK03150D-02.mp3']
        })
    },
    m: {
        sound: new Howl({
            src: ['assets/audio/BassK03150D-03.mp3']
        })
    },
};

// define the vars
var pos = circlePosition();
var x = pos[0];
var y = pos[1];
var d = pos[2];
var color = circleColor();
var circleFill = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
var bgCol = bgColor();
var bgFill = "rgb(" + bgCol[0] + ", " + bgCol[1] + ", " + bgCol[2] + ")";

// randomize circle position
function circlePosition(){
    var posX = Math.floor(Math.random() * window.innerWidth);
    var posY = Math.floor(Math.random() * window.innerHeight - 140);
    var diameter = Math.floor(Math.random() * 200 + 50);
    return [posX, posY, diameter]
};

// randomize RGB
function randomizeRGB() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return [r, g, b]
}

// randomize circle fill color
function circleColor(){
    var results = randomizeRGB();
    return results
};

// randomize bg color
function bgColor(){
    var results = randomizeRGB();
    return results
};

// define the vars and initialize it
function init(){
    circlePosition();
    circleColor();
    bgColor();
    pos = circlePosition();
    x = pos[0];
    y = pos[1];
    d = pos[2];
    color = circleColor();
    circleFill = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
    bgCol = bgColor();
    bgFill = "rgb(" + bgCol[0] + ", " + bgCol[1] + ", " + bgCol[2] + ")";
}

// on keypress updates all the vars and play the sound
$(document).on("keypress", function(){
    init();
});