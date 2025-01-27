let _amigos=[];

function agregarAmigo(){
    let _nombreIngresado=document.getElementById('amigo');
    if (_nombreIngresado.value==="") 
        alert("¡Ingrese un nombre valido!");
    else{
        if (verificarDuplicado(_nombreIngresado)==false){
            _amigos.push(_nombreIngresado.value);
            mostrarEnLista();           
        };
    }
    _nombreIngresado.value="";
}
function verificarDuplicado(_nombreIngresado){
    for (indice=0; indice< _amigos.length; indice++){
        if (_amigos[indice]===_nombreIngresado.value){
            alert("¡Nombre ya fue registrado!");
                return true;
            }
    }
    return false;
}
function mostrarEnLista(){
    let _nombreALista;
    let _listaAmigos=document.getElementById("listaAmigos");
    let _posicion=0;

    _listaAmigos.innerHTML="";
    for (indice=0; indice< _amigos.length; indice++){
        _posicion=indice+1;
        let _htmlLista=document.createElement("li");
        let _htmlParrafo=document.createElement("p");
        _nombreALista="Posición: " + _posicion + " - Nombre: " + _amigos[indice];
        _htmlParrafo.appendChild(document.createTextNode(_nombreALista));
        document.querySelector("#listaAmigos").appendChild(_htmlLista).appendChild(_htmlParrafo);
        //console.log(amigos[indice]);
    }
}
function sortearAmigo(){
    if (_amigos.length===0){
        alert("¡Debe ingresar mínimo un nombre de tus amigos!");
        return;
    };
    let _resultado=document.getElementById("resultado");
    _resultado.innerHTML="";
    let _indiceMinimo =0;
    let _indeceMaximo = Math.floor(_amigos.length-1);
    let _htmlLista=document.createElement("li");
    let _htmlParrafo=document.createElement("p");
    let _nombreElegido="Amigo elegido: " + _amigos[ (Math.floor(Math.random() * (_indeceMaximo - _indiceMinimo + 1) + _indiceMinimo))]
    _htmlParrafo.appendChild(document.createTextNode(_nombreElegido));
    document.querySelector("#resultado").appendChild(_htmlLista).appendChild(_htmlParrafo);
    //return ( Math.floor(Math.random() * (_indeceMaximo - _indiceMinimo + 1) + _indiceMinimo))+1;
     }
