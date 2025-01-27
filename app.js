let amigos=[];

function agregarAmigo(){
    var _nombreIngresado=document.getElementById('amigo');
    if (_nombreIngresado.value==="") 
        alert("¡Ingrese un nombre valido!");
    else
        amigos.push(_nombreIngresado.value);
    console.log(amigos)
    _nombreIngresado.value="";
    //alert(document.querySelector("amigo"));
}