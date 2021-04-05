let autos = require('./modulos/autos.js');

const concesionaria = {

    autos,

    buscarAuto: function (patente) {
        for (i = 0 ; i < autos.length ; i++){
            if (patente == autos[i].patente ) {
                return autos[i];
            }
        }
        return null;
    },

    venderAuto: function (patente) {
        let autoEncontrado = [];
        this.buscarAuto(patente);
        autoEncontrado = autos[i];
        autoEncontrado.vendido = true;
    },

    autosParaLaVenta : function () {
        let aVender = autos.filter (function(autos){
            return autos.vendido == false;
        });
        return aVender;
    }

}