sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library, JSONModel) {
        "use strict";

        var urlOject = library.URLHelper;

        return Controller.extend("consultaprod.controller.vw_consulta", {
            onInit: function () {
                //alert("Teste");
                let produto = {};
                let productModel = new JSONModel(produto);
                let view = this.getView();
                view.setModel(productModel, "ModeloProduto");
            },
            onPressBuscar: function() {
                let input;
                input = this.byId("inpBusca");
                let barcode = input.getValue();
                //alert(valor);

                let parameters = {
                    url : "https://world.openfoodfacts.org/api/v2/product/" + barcode,
                    methood : "GET",
                    async : true,
                    crossDomain : true
                };

                $.ajax(parameters).done(function(response){
                    let oDadosModel = this.getView().getModel("ModeloProduto");
                    oDadosModel.setData({});
                    oDadosModel.refresh();
                    oDadosModel.setData(response);
                    oDadosModel.refresh();
                }.bind(this))
                .fail(function(){
                    debugger
                });

            },
            onClickImg: function(oEvent){
                urlOject.redirect(oEvent.getSource().getSrc(), true );
            }
        });
    });
