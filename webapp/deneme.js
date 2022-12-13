sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";
/*
    let a = "deneme değişken datası";

    
    console.log('a değişkenınde ne var:' + a);
    debugger;
    console.log('deneme log');
*/
	new Button({
		text: "DenemevJS...",
		press: function () {
			MessageToast.show("Deneme den gelen mesaj!");
		}
	}).placeAt("content");

});

