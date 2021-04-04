let autos = require('./modulos/autos.js');

const concesionaria = {

    autos,
    
    deBug: function () {
        // let patentes = autos.patente;
        // return autos[i].patente;
    },

    buscarAuto: function (patente) {
        for (i = 0 ; i < autos.length ; i++){
            if (patente == autos[i].patente ) {
                return autos[i];
            }
        }
        return null;
    }

}

// console.log(concesionaria.deBug());