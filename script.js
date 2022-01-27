let encriptar = document.getElementById("encriptar"); 
let desencriptar = document.getElementById("desencriptar"); 
let mensaje = document.getElementById("mensaje"); 
let copiar = document.getElementById("copiar"); 

const keyWords = 
{
    "e":"enter",
    "i":"imes",
    "a":"ai",
    "o":"ober",
    "u":"ufat"
};

encriptar.onclick = encriptarMsj;
desencriptar.onclick = desencriptarMjs;
copiar.onclick = copiarTxt;

//Funcion validar solo minusculas
function validar(msj){
  let letras = " abcdefghijklmnñopqrstuvwxyz"
  let validacion = true;
  for(i=0; i<msj.length; i++){
    let letra = letras.indexOf(msj[i])
    if (letra == (-1)) {
      validacion = false
    }
  }
  return (validacion)
}

 //encriptar mensaje
function encriptarMsj(){
  let textoUsu = document.getElementById("textoUsu").value ;
  validacion = validar(textoUsu)
  if (validacion == true) {
    let txtEncriptado = "";
    for (const key in keyWords) {
      txtEncriptado = textoUsu.replaceAll(key,keyWords[key]);
      textoUsu= txtEncriptado;
    }
    mensaje.value = txtEncriptado
  } else {
    alert("Caracteres invalidos")
  }
  
}

//Aca desencripto el mensaje
function desencriptarMjs(){
  let textoUsu = document.getElementById("textoUsu").value ;
  validacion = validar(textoUsu)
  if (validacion == true) {
    let txtDesencriptado = "";
    for (const key in keyWords) {
      txtDesencriptado = textoUsu.replaceAll(keyWords[key], key);
      textoUsu= txtDesencriptado;
    }
    mensaje.value = txtDesencriptado
  } else {
    alert("Caracteres invalidos")
  }
  
}
//Funcion copiar texto
function copiarTxt(){
  navigator.clipboard.writeText(mensaje.value);
  
}

