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
    let _continuarTecnologias ="true";
    let _nombreTecnologia=""
    //if (_areaSeleccionada===1 || _areaSeleccionada===2){
        let _lenguajeItem=0;
        let _lenguajeNombre="";
        let _mensajeError="";
        while (_lenguajeItem !=1 && _lenguajeItem!=2 ){
            _lenguajeItem=prompt(`${_mensajeError} ${_areaSeleccionada==1 ? 'Selecciono Front-End, ':'Selecciono Back-End, '} ${_areaSeleccionada==1 ? 'Selecciona 1 para React, 2 para Vue' : 'Selecciona 1 para C#, 2 para Java'}`,1);
            if (_areaSeleccionada==1){
                _lenguajeNombre=`${_lenguajeItem==1 ? 'React' : 'Vue'}`;
            } else {
                _lenguajeNombre=`${_lenguajeItem==1 ? 'C#':'Java'}`;
            }
            _mensajeError= "¡Error! Ingrese una opción correcta, ";
        }
        let _especialidad=0;
        _mensajeError = "";
        while (_especialidad !=1 && _especialidad!=2){
            _especialidad=prompt(`${_mensajeError} Para especializarce en el área: ${_areaSeleccionada==1 ? 'Front-End':'Back-End'} dígite 1, para convertirse en Full Stack digite 2`,1);
            _mensajeError= "¡Error! Ingrese una opción correcta, ";
        }
         let _listaTecnologias=document.getElementById("listaTecnologias");
        _listaTecnologias.innerHTML="";

        
        while(_continuarTecnologias=="true"){
            _nombreTecnologia=prompt("Ingrese tecnología que desea aprender");
            if (_nombreTecnologia==""){
                alert("Debe ingresar un dato.");
            } else {
               let _htmlLista=document.createElement("li");
               let _htmlParrafo=document.createElement("p");
               _htmlParrafo.appendChild(document.createTextNode(`- Excelente, selecciono: ${_nombreTecnologia}`));
               document.querySelector("#listaTecnologias").appendChild(_htmlLista).appendChild(_htmlParrafo);
               const _respuesta=prompt("¿Hay alguna otra tecnología que te gustaría aprender?, responder Ok","Ok");
               _continuarTecnologias=`${_respuesta=='Ok' ? "true":"false"}`;
            }
        }
        let _areaElegida=document.getElementById("areaElegida");
        _areaElegida.innerHTML="";
        let _htmlLista=document.createElement("li");
        let _htmlParrafo=document.createElement("p");
        _htmlParrafo.appendChild(document.createTextNode(`${_areaSeleccionada==1 ? 'Front-End, ':'Back-End, '} ${_lenguajeNombre} ${_especialidad==2 ? 'Full Stack':''}`));
        document.querySelector("#areaElegida").appendChild(_htmlLista).appendChild(_htmlParrafo);
        
    //}
}
function _4De7DiasOfCode(){
    let _numeroSecreto = Math.floor(Math.random()*10)+1;
    let _numeroDelUsuario = 0;
    let _intentosRealizados = 0;
    let _maximosIntentos = 3;
    //alert(_numeroSecreto);
    while (_numeroDelUsuario != _numeroSecreto) {
        _numeroDelUsuario = parseInt(prompt(`Ingresa un número entre 1 y 10:`));
        _intentosRealizados++;        
        //alert(typeof(_numeroDelUsuario));
        if (_numeroDelUsuario>=1 && _numeroDelUsuario<=10){
            if (_numeroDelUsuario === _numeroSecreto) {
                alert(`Acertaste, el número es: ${_numeroDelUsuario}. Lo hiciste en ${_intentosRealizados} ${_intentosRealizados == 1 ? 'vez' : 'veces' }`);
                break;
            } else {
                if (_numeroDelUsuario > _numeroSecreto) {
                    alert('El número secreto es menor');
                } else {
                    alert('El número secreto es mayor');
                }
             }
        } else {
            alert("Debe ingresar un dato correcto");
        }
        if (_intentosRealizados >= _maximosIntentos) {
            alert(`Llegaste al número máximo de ${_maximosIntentos} intentos`);
            break;
        }
    }
}
 