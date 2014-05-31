function Controller() {
    function goPlay() {
        Alloy.createController("game").getView().open();
    }
    function search() {
        alert("Deseas buscar un rival??");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        heigth: Ti.UI.SIZE,
        top: 150,
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        text: "The Last Stick",
        id: "title"
    });
    $.__views.index.add($.__views.title);
    $.__views.buttonPlay = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        heigth: Ti.UI.SIZE,
        top: 50,
        title: "Empezar a jugar",
        id: "buttonPlay"
    });
    $.__views.index.add($.__views.buttonPlay);
    goPlay ? $.__views.buttonPlay.addEventListener("click", goPlay) : __defers["$.__views.buttonPlay!click!goPlay"] = true;
    $.__views.buttonSearch = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        heigth: Ti.UI.SIZE,
        title: "Buscar a un rival",
        id: "buttonSearch"
    });
    $.__views.index.add($.__views.buttonSearch);
    search ? $.__views.buttonSearch.addEventListener("click", search) : __defers["$.__views.buttonSearch!click!search"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.buttonPlay!click!goPlay"] && $.__views.buttonPlay.addEventListener("click", goPlay);
    __defers["$.__views.buttonSearch!click!search"] && $.__views.buttonSearch.addEventListener("click", search);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;