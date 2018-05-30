{
    let mensajeG;
    let contador;
    let colores;
    let csCheck;
    let csPintar;
    let btnExit;
    let contadorIntentos;
    let juegoDiv;
    let btnCheck;
    let btnRestart;

    let nuevoC = function () {
        for (let i = 0; i < csPintar.length; i++) {
            if (csPintar[i].style.backgroundColor == "" || csPintar[i].style.backgroundColor == "transparent") {
                switch (this.id) {
                    case "CNaranja":
                        csPintar[i].style = "background-color: orange;";
                        break;

                    case "CVerde":
                        csPintar[i].style = "background-color: green;";
                        break;

                    case "CRojo":
                        csPintar[i].style = "background-color: red;";
                        break;

                    case "CAzul":
                        csPintar[i].style = "background-color: blue;";
                        break;

                    case "CAmarillo":
                        csPintar[i].style = "background-color: yellow;";
                        break;

                    case "CMarron":
                        csPintar[i].style = "background-color: brown;";
                        break;

                    case "CNegro":
                        csPintar[i].style = "background-color: black;";
                        break;

                    case "CBlanco":
                        csPintar[i].style = "background-color: white;";
                        break;       
                }
                csPintar[i].addEventListener("click", removeColor);
                break;
            }
        }
        contador++;
        }

    let removeColor = function () {
        this.style = "background-color: transparent;";
        this.removeEventListener("click", removeColor);
        contador--;
    }

    let removeEventIntento = function () {
        for (let i = 0; i < csPintar.length; i++) {
            csPintar[i].removeEventListener("click", removeColor);
            csPintar[i].style.pointerEvents = "none";
        }
    }

    let nuevoIntento = function () {
        removeEventIntento();

        let intento = document.createElement("div");
        intento.id = "intento";
        intento.className ="intento1"

        let nCsPintar = document.createElement("div");
        nCsPintar.id = "csPintar";

        let nuevoCsCheck = document.createElement("div");
        nuevoCsCheck.id = "csCheck";

        let nCPintar;
        let nCCheck;

        for (let i = 0; i < 4; i++) {
            nCPintar = document.createElement("div");
            nCPintar.classList.add("cPintar");
            nCPintar.classList.add("cPintar" + contadorIntentos);
            nCsPintar.appendChild(nCPintar);

            nCCheck = document.createElement("div");
            nCCheck.classList.add("cCheck");
            nCCheck.classList.add("cCheck" + contadorIntentos);
            nuevoCsCheck.appendChild(nCCheck);
        }

        intento.appendChild(nCsPintar);
        intento.appendChild(nuevoCsCheck);

        juegoDiv.appendChild(intento);

        contador = 0;
        csPintar = document.getElementsByClassName("cPintar" + contadorIntentos);
        csCheck = document.getElementsByClassName("cCheck" + contadorIntentos);
        contadorIntentos++;
    }

    let checkear = function () {
        let coloresCheckear = [];
        let contador2 = 0;
        for (let i = 0; i < csPintar.length; i++) {
            if (csPintar[i].style.backgroundColor == "red") {
                coloresCheckear.push("rojo");
            } else if (csPintar[i].style.backgroundColor == "black") {
                coloresCheckear.push("negro");
            } else if (csPintar[i].style.backgroundColor == "blue") {
                coloresCheckear.push("azul");
            } else if (csPintar[i].style.backgroundColor == "white") {
                coloresCheckear.push("blanco");
            } else if (csPintar[i].style.backgroundColor == "yellow") {
                coloresCheckear.push("amarillo");
            } else if (csPintar[i].style.backgroundColor == "green") {
                coloresCheckear.push("verde");
            } else if (csPintar[i].style.backgroundColor == "orange") {
                coloresCheckear.push("naranja");
            } else if (csPintar[i].style.backgroundColor == "brown") {
                coloresCheckear.push("marron");
            }
            
        }
           
        if (contador >= 4) {
            objetoC = mastermind.checkear(coloresCheckear);
            if (objetoC.negra > 0) {
                while (contador2 < objetoC.negra) {
                    csCheck[contador2].style = "background-color: #000000;";
                    contador2++;
                }
            }

            if (contador2 == 4) {
                mensajeG.style = "display: block;";
            }
    
            if (objetoC.blanca > 0) {
                for (let i = 0; i < objetoC.blanca; i++) {
                    csCheck[contador2].style = "background-color: #FFFFFF;";
                    contador2++;
                }
                contador2 = 0;
            }
            if (contador2 != 4) {
                nuevoIntento();
            }

            juegoDiv.scrollTo(0, 0)

            
        }
    }

    let restart = function () {
        //Aqui estaba el problema en la version antigua, no borraba la pantalla y los ids se solapaban
        document.getElementById("juego").innerHTML= "";
        init();
        mensajeG.style = "display: none;"
    }

    let init = function () {
        mastermind.init();
        mastermind.verPorConsola();
        contador = 0;
        contadorIntentos = 0;
        juegoDiv = document.getElementById("juego");
        colores = document.getElementsByClassName("C");
        csPintar = document.getElementsByClassName("cPintar");
        csCheck = document.getElementsByClassName("cCheck");
        btnCheck = document.getElementById("check");
        mensajeG = document.getElementById("mensaje");
        btnExit = document.getElementById("exit");
        btnRestart = document.getElementById("restart");

        btnCheck.addEventListener("click", checkear);

        btnExit.addEventListener("click", function () {
            window.close();
        });

        btnRestart.addEventListener("click", restart);

        for (let i = 0; i < colores.length; i++) {
            colores[i].addEventListener("click", nuevoC);
        }

        nuevoIntento();
    }

    window.onload = init;
}