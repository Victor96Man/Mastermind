
 mastermind = (function () {
    let colores = ["amarillo", "blanco", "azul", "rojo", "naranja", "marron", "negro", "verde"];

    let blanca;
    let negra;
    let objetoColor;

    let ramdonColores = function () {
        return Math.floor((Math.random() * colores.length));
    };

    let crearObjetoColores = function () {
        for (let i = 0; i < 4; i++) {
            objetoColor.push(colores[ramdonColores()]);
        }
    }

    let verPorConsola = function () {
        console.log(objetoColor);
    }

    let getArray = function(){
        return objetoColor;
    }

    let checkear = function (coloresCheckear) {
        let objetoCopia = objetoColor.slice();
        blanca = 0;
        negra = 0;

        coloresCheckear.forEach(function (element, indice) {
            if (element == objetoCopia[indice]) {
                objetoCopia[indice] = undefined;
                coloresCheckear[indice] = 1;
                negra++;
            }
        });

        coloresCheckear.forEach(function (element, indice) {
            let indiceOrigen = objetoCopia.indexOf(element);
            if (objetoCopia.indexOf(coloresCheckear[indice]) != -1) {
                objetoCopia[indiceOrigen] = 0;
                blanca++;
            }
        });


        return {
            objetoCopia: objetoCopia,
            coloresCheckear: coloresCheckear,
            negra: negra,
            blanca: blanca
        }
    }

    let init = function () {
        objetoColor = [];
        crearObjetoColores();
    }

    return {
        init: init,
        verPorConsola: verPorConsola,
        checkear: checkear
    };
})();
