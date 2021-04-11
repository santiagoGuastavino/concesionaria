let autos = require('./modulos/autos.js');
let personas = require('./modulos/personas.js');

const concesionaria = {

    autos,
    personas,

    buscarAuto: function (patente){
        for (i = 0 ; i < autos.length ; i++){
            if (patente == autos[i].patente){
                return autos[i];
            }
        }
        return null;
    },

    venderAuto: function (patente){
        let autoEncontrado = [];
        this.buscarAuto(patente);
        autoEncontrado = autos[i];
        autoEncontrado.vendido = true;
    },

    autosParaLaVenta: function (){
        let aVender = autos.filter(function(autos){
            return autos.vendido == false;
        });
        return aVender;
    },

    autosNuevos: function (){
        let aVender = this.autosParaLaVenta();
        let autosNuevos = aVender.filter(function(aVender){
            return aVender.km < 100;
        });
        return autosNuevos;
    },

    listaDeVentas: function (){
        let autosVendidos = autos.filter(function(autos){
            return autos.vendido == true;
        });
        let valores = [];
        for (i = 0 ; i < autosVendidos.length ; i++){
            valores.push(autosVendidos[i].precio);

        };
        return valores;
    },

    totalDeVentas: function (){
        let valores = this.listaDeVentas();
        let sumaDeValores = valores.reduce(function(acum,num){
            return acum + num;
        },0);
        return sumaDeValores;
    },

    puedeComprar: function (auto,persona){
        let precioCuota = auto.precio / auto.cuotas;
        if (persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > precioCuota){
            return true;
        }else{
            return false;
        }
    }

}


// concesionaria.venderAuto('APL123');
// concesionaria.venderAuto('JJK116');
// concesionaria.venderAuto('CUB523');