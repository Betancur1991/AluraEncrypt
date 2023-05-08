const textArea=document.querySelector(".texto");
const mensaje=document.querySelector(".resp");
const anchoPantalla = window.innerWidth;


function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value);
    if(!textoEncriptado==""){
        const mayusAcentos=/[A-ZÁÉÍÓÚÜ-áéíóú]|[^\w\s]/g;
        if(mayusAcentos.test(textArea.value)){
            alert('El texto no puede contener caracteres especiales, mayúsculas o letras acentuadas');
            textArea.value="";
        }else{
            mensaje.style.backgroundImage = "none";
            mensaje.value=textoEncriptado;
            let contenidoPorDefecto=document.querySelector(".mensaje-r1");
            contenidoPorDefecto.style.display="none";
            let contenidoPorDefecto2=document.querySelector(".mensaje-r2");
            contenidoPorDefecto2.style.display="none";
            textArea.value="";
        }
        
    } else{
        if (anchoPantalla >= 1025) {
            mensaje.style.backgroundImage = "url('img/Muñeco.png')";
        }
        mensaje.value=textoEncriptado;
        let contenidoPorDefecto=document.querySelector(".mensaje-r1");
        contenidoPorDefecto.style.display="block";
        let contenidoPorDefecto2=document.querySelector(".mensaje-r2");
        contenidoPorDefecto2.style.display="block";
    }
}



function encriptar(stringEncrioptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrioptada=stringEncrioptada.toLowerCase();

    for (let i = 0;i<matrizCodigo.length;i++){
        if(stringEncrioptada.includes(matrizCodigo[i][0])){
            stringEncrioptada=stringEncrioptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncrioptada
}

function btnDesencriptar(){
    const textoEncriptado=desencriptar(textArea.value);
    if(!textoEncriptado==""){
        mensaje.style.backgroundImage = "none";
        mensaje.value=textoEncriptado;
        let contenidoPorDefecto=document.querySelector(".mensaje-r1");
        contenidoPorDefecto.style.display="none";
        let contenidoPorDefecto2=document.querySelector(".mensaje-r2");
        contenidoPorDefecto2.style.display="none";
        textArea.value="";
    } else{
        if (anchoPantalla >= 1025) {
            mensaje.style.backgroundImage = "url('img/Muñeco.png')";
        }
        mensaje.value=textoEncriptado;
        let contenidoPorDefecto=document.querySelector(".mensaje-r1");
        contenidoPorDefecto.style.display="block";
        let contenidoPorDefecto2=document.querySelector(".mensaje-r2");
        contenidoPorDefecto2.style.display="block";
    }
}

function desencriptar(stringDesencrioptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencrioptada=stringDesencrioptada.toLowerCase();

    for (let i = 0;i<matrizCodigo.length;i++){
        if(stringDesencrioptada.includes(matrizCodigo[i][1])){
            stringDesencrioptada=stringDesencrioptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencrioptada
}

function copy(){
    const textoCopiado=mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado correctamente!")
    mensaje.value="";
    if (anchoPantalla >= 1025) {
        mensaje.style.backgroundImage = "url('img/Muñeco.png')";
    }
    let contenidoPorDefecto=document.querySelector(".mensaje-r1");
    contenidoPorDefecto.style.display="block";
    let contenidoPorDefecto2=document.querySelector(".mensaje-r2");
    contenidoPorDefecto2.style.display="block";
}

document.querySelector('.copy').addEventListener('click', copy);