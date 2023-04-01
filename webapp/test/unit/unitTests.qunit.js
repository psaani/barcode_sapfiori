/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"consulta_prod/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});