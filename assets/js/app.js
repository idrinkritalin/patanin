// randomize the position
function circlePosition(){
    var posX = Math.floor(Math.random() * window.innerWidth);
    var posY = Math.floor(Math.random() * window.innerHeight - 140);
    var diameter = Math.floor(Math.random() * 80);
    return [posX, posY, diameter]
};

// randomize the fill color
function circleColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return [r, g, b]
};

// define the vars
var positions = circlePosition();
var x = positions[0];
var y = positions[1];
var d = positions[2];
var color = circleColor();
var fill = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";

// on keypress updates all the vars
$(document).on("keypress", function(){
    circlePosition();
    circleColor();
    positions = circlePosition();
    x = positions[0];
    y = positions[1];
    d = positions[2];
    color = circleColor();
    fill = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
});