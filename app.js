let amigos=[];

function agregarAmigo(){
    var _nombreIngresado=document.getElementById('amigo');
    if (_nombreIngresado.value==="") 
        alert("¡Ingrese un nombre valido!");
    else{
        if (verificarDuplicado(_nombreIngresado)==false){
            amigos.push(_nombreIngresado.value);
            mostrarEnLista();           
        };
    }
    //console.log(amigos)
    _nombreIngresado.value="";
}
function verificarDuplicado(_nombreIngresado){
    for (indice=0; indice< amigos.length; indice++){
        if (amigos[indice]===_nombreIngresado.value){
            alert("¡Nombre ya fue registrado!");
                return true;
            }
    }
    return false;
}
function mostrarEnLista(){
    var _nombreALista;
    var _listaAmigos=document.getElementById("listaAmigos");
    var _posicion=0;

    _listaAmigos.innerHTML="";
    for (indice=0; indice< amigos.length; indice++){
        _posicion=indice+1;
        var _htmlLista=document.createElement("li");
        var _htmlParrafo=document.createElement("p");
        _nombreALista="Posición: " + _posicion + " - Nombre: " + amigos[indice];
        _htmlParrafo.appendChild(document.createTextNode(_nombreALista));
        document.querySelector("#listaAmigos").appendChild(_htmlLista).appendChild(_htmlParrafo);
        //console.log(amigos[indice]);
    }
}