var args = arguments[0] || {};

var maxPalosFila = 7;

var stickHeight = Titanium.Platform.displayCaps.platformHeight / maxPalosFila - 20;
var stickWidht = Titanium.Platform.displayCaps.platformWidth / maxPalosFila - 20;
var middlePos = Titanium.Platform.displayCaps.platformWidth / 2;

var blueStick = Ti.UI.createImageView({
    image : '/images/blueStick.png'
});

var whiteStick = Ti.UI.createImageView({
    image : '/images/whiteStick.png'
});

var Stick = Ti.UI.createImageView({
    image : '/images/Stick.png',
    width : Titanium.Platform.displayCaps.platformWidth / maxPalosFila,
    height : Titanium.Platform.displayCaps.platformHeight / maxPalosFila,
});

var map = [];

function construirArbol() {
    var topPosition = 0;
    var leftPosition = 0;
    for (var i = 1; i <= maxPalosFila; i = i + 2) {
        topPosition = i * (stickHeight/1.5);
        leftPosition = Titanium.Platform.displayCaps.platformWidth/(i+1);
        map[i] = [];
        for (var j = 0; j < i; j++) {
            Titanium.API.info("Pintando fila "+i+" palo "+j+" en posicion top: "+topPosition+" left: "+ leftPosition);
            map[i][j] = Ti.UI.createImageView({
                image : '/images/Stick.png',
                width : stickWidht,
                height : stickHeight,
                top : topPosition,
                left : leftPosition
            });
            $.game.add(map[i][j]);
            leftPosition = leftPosition + stickWidht;
        };
    };
}

construirArbol(); 
$.game.open();