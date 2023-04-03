const textArea = document.querySelector(".text-area"); //Captura lo que escriba en la clase textarea
const mensaje = document.querySelector(".mensaje"); //Captura lo que escriba en la clase mensaje

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matriz = [["e","enter"],["i","imes"], ["a","ai"],["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if(stringEncriptada.includes(matriz[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matriz = [["e","enter"],["i","imes"], ["a","ai"],["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if(stringDesencriptada.includes(matriz[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return stringDesencriptada;
}
