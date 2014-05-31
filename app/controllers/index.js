function goPlay(e) {
	/*var modalWindow = Ti.UI.createWindow({
		title: 'modal Window',
		backgroundColor: '#000',
		height: 200,
		width: '200dp',
		id: 'modal',
		fullscreen: false
	});
	
	var label = Ti.UI.createLabel({
		text: 'Nombre de usuario:',
		color: '#FFF',
		top: 50
	});
	
	var input = Ti.UI.createTextField({
		value: '',
		backgroundColor:'#fff',
		width: 150,
		top: 80
	});
	
	modalWindow.add(label);
	modalWindow.add(input);
	modalWindow.open({modal:true});*/
    Alloy.createController("game").getView().open();
}

function search(e) {
	alert("Deseas buscar un rival??");
}

$.index.open();

/*var labelTitle = Ti.UI.createLabel({
    font : {
        fontSize : 50
    },
    text : 'TheLastStick',
    textAlign : 'center',
    top : 100
});

$.index.add(labelTitle);
$.index.open();

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