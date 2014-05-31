function Controller() {
    function construirArbol() {
        var topPosition = 0;
        var leftPosition = 0;
        for (var i = 1; maxPalosFila >= i; i += 2) {
            topPosition = i * (stickHeight / 1.5);
            leftPosition = Titanium.Platform.displayCaps.platformWidth / (i + 1);
            map[i] = [];
            for (var j = 0; i > j; j++) {
                Titanium.API.info("Pintando fila " + i + " palo " + j + " en posicion top: " + topPosition + " left: " + leftPosition);
                map[i][j] = Ti.UI.createImageView({
                    image: "/images/Stick.png",
                    width: stickWidht,
                    height: stickHeight,
                    top: topPosition,
                    left: leftPosition
                });
                $.game.add(map[i][j]);
                leftPosition += stickWidht;
            }
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "game";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.game = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "game"
    });
    $.__views.game && $.addTopLevelView($.__views.game);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var maxPalosFila = 7;
    var stickHeight = Titanium.Platform.displayCaps.platformHeight / maxPalosFila - 20;
    var stickWidht = Titanium.Platform.displayCaps.platformWidth / maxPalosFila - 20;
    Titanium.Platform.displayCaps.platformWidth / 2;
    Ti.UI.createImageView({
        image: "/images/blueStick.png"
    });
    Ti.UI.createImageView({
        image: "/images/whiteStick.png"
    });
    Ti.UI.createImageView({
        image: "/images/Stick.png",
        width: Titanium.Platform.displayCaps.platformWidth / maxPalosFila,
        height: Titanium.Platform.displayCaps.platformHeight / maxPalosFila
    });
    var map = [];
    construirArbol();
    $.game.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;