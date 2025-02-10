let _amigos=[];
let _areaSeleccionada=0;

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

function _1De7DiasOfCode(){
    let _numeroUno=1;
    let _stringUno='1';
    let _numeroTreinta=30;
    let _stringTreinta='30';
    let _numeroDiez=10;
    let _stringDiez='10';

    if (_numeroUno==_stringUno){
        console.log('Las variables _numeroUno y _stringUno tienen el mismo valor, pero tipos diferentes');
    } else {
        console.log('Las variables _numeroUno y _stringUno no tienen el mismo valor');
    }
    if(_numeroTreinta===_stringTreinta){
        console.log('Las variables _numeroTreinta y _stringTreinta tienen el mismo valor y el mismo tipo');
    } else {
        console.log('Las variables _numeroTreinta y _stringTreinta no tienen el mismo tipo');
    }
    if(_numeroDiez!==_stringDiez){
        console.log('Las variables _numeroDiez y _stringDiez tienen el mismo valor, pero tipos diferentes');
    } else {
        console.log('Las variables _numeroDiez y _stringDiez no tienen el mismo valor');
    }
}

function _2De7DiasOfCode(){
    const _nombre =prompt("¿Cúal es tu nombre?");
    const _edad =prompt("¿Cuántos años tienes?");
    const _lenguaje=prompt("¿Qué lenguaje de programación estas estudiando?");
    const _mensaje=`¡Cómo estás ${_nombre}, veo que tienes ${_edad} años y te encuentras estudiando ${_lenguaje}!`;
    alert(_mensaje);
    const  _preguntaTeGusta=prompt(`¿ Responde 1 para sí y 2 para no, si te gusta estudiar ${_lenguaje}`);
    if (_preguntaTeGusta>=1 && _preguntaTeGusta<=2){
        alert(`${_preguntaTeGusta==1 ?'¡Muy bien sigue estudiando!':'Intenta con otro lenguaje'}`);
    } 
}

function _3De7DiasOfCode(_areaSeleccionada){
    let _continuarTecnologias =1;
    if (_areaSeleccionada===1 || _areaSeleccionada===2){
        const _eleccion=prompt(`${_areaSeleccionada==1 ? 'Selecciono Front-End, ':'Selecciono Back-End, '} ${_areaSeleccionada==1 ? 'Selecciona 1 para React, 2 para Vue' : 'Selecciona 1 para C#, 2 para Java'}`,1);
        const _especialidad=prompt("Para especializarce en el área elegida dígite 1, para convertirse en Full Stack digite 2",1);
        while(_continuarTecnologias===1){
            const _respuesta=prompt("¿Hay alguna otra tecnología que te gustaría aprender?, responder Ok","Ok");
            _continuarTecnologias=`${_respuesta=='Ok' ? 1:2}`;
            alert(_continuarTecnologias);
        }
    }
}
 