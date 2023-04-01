/*global QUnit*/

sap.ui.define([
	"consulta_prod/controller/vw_consulta.controller"
], function (Controller) {
	"use strict";

	QUnit.module("vw_consulta Controller");

	QUnit.test("I should test the vw_consulta controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
