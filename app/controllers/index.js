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

var labelTitle = Ti.UI.createLabel({
    font : {
        fontSize : 50
    },
    text : 'TheLastStick',
    textAlign : 'center',
    top : 100
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
            $.index.add(map[i][j]);
            leftPosition = leftPosition + stickWidht;
        };
    };
}


function doClick(e) {
    Titanium.API.info("Ancho: " + Titanium.Platform.DisplayCaps.platformWidth);
    Titanium.API.info("Alto: " + Titanium.Platform.DisplayCaps.platformHeight);
}


$.index.open();
$.index.add(labelTitle);
construirArbol(); 

/*
// Prueba animacion colores
var loaderIndex=1;
function changingColorAnimation(loaderImage){
  loaderImage.image = "/images/stick-sequence/" + loaderIndex + ".png";
  loaderIndex++;
  // if you have reached the end of the sequence, reset it to 1
  if(loaderIndex===3)loaderIndex=1;
}

var loaderAnimate = setInterval(loadingAnimation(map[1][0]),80);
*/