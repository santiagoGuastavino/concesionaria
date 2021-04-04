let autos = require('./modulos/autos.js');

const concesionaria = {

    autos,
    
    buscarAuto: function(array,patente){
        for (i = 0 ; i < array.length ; i++){
            if (array[i].patente === patente){
                return array[i].marca + ' ' + array[i].modelo + ' ' + array[i].anio;
            }
        }
    }

}

console.log(concesionaria.buscarAuto(autos,'JJK116'));