var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var muneco = document.querySelector(".contenedormuneco");
var h2 = document.querySelector(".contenedor-nm")
var parrafo = document.querySelector(".parrafo-nm")
var textoEncriptado = document.querySelector(".texto-encriptado")
var copiar = document.querySelector("#btn-copy")


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;







function copiarTexto(){
navigator.clipboard.writeText(textoEncriptado.value);

Swal.fire(
        'Texto Copiado correctamente!',
        '',
        'success'
      )




}

copiar.onclick = copiarTexto;

function encriptar(){
    oculto()
    mostrar()
    var area = recuperartexto();
    textoEncriptado.textContent = encriptacion(area)
    Swal.fire(
        'Texto Encriptado correctamente!',
        '',
        'success'
      )

    
}

function desencriptar(){
    oculto()
    mostrar()
    var area = recuperartexto();
    textoEncriptado.textContent = desencriptacion(area)

    Swal.fire(
        'Texto Desencritpado correctamente!',
        '',
        'success'
      )


}


function recuperartexto(){
    var textarea = document.querySelector(".textarea");
    return textarea.value;
}

function oculto(){
    muneco.classList.add("ocultar");
    h2.classList.add("ocultar");
    parrafo.classList.add("ocultar");

}

function mostrar(){
    copiar.classList.remove("ocultar")
}

function encriptacion(mensaje){
    var texto = mensaje;
    var textoFinal ="";




    for(var i = 0; i < texto.length; i++){
        if(mensaje[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(mensaje[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(mensaje[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(mensaje[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(mensaje[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }

        else{
            textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;

}

function desencriptacion(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(mensaje[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(mensaje[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(mensaje[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(mensaje[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(mensaje[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }

        else{
            textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;
}