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

    puedeComprar: function (patente,nombrePersona){
        let autoEncontrado = this.buscarAuto(patente)
        let precioAuto = autoEncontrado.precio;
        let precioCuotas = () => precioAuto / autoEncontrado.cuotas;
        
        for (i = 0 ; i < personas.length ; i++){
            if (nombrePersona == personas[i].nombre){
                if (personas[i].capacidadDePagoEnCuotas >= precioCuotas() && personas[i].capacidadDePagoTotal >= precioAuto){
                    return true;
                }
            }
        }
        return 'No le alcanza';
    }

}

console.log(concesionaria.puedeComprar('JJK116','Juan'));
// concesionaria.venderAuto('APL123');
// concesionaria.venderAuto('JJK116');
// concesionaria.venderAuto('CUB523');