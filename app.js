let amigos=[];

function agregarAmigo(){
    var _nombreIngresado=document.getElementById('amigo').value;
    if (_nombreIngresado==="") 
        alert("¡Ingrese un nombre valido!"document.getElementById("amigo").value"");
    else
        amigos.push(_nombreIngresado);
    console.log(amigos)
    //alert(document.querySelector("amigo"));
}