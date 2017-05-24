var become = document.getElementById("insert");
var cuadroC = document.getElementsByClassName("cuadro-completo")[0];
var cuadro = document.getElementById("cuadrito");

become.addEventListener("click", function(){
	var num = document.getElementById("phone").value;

	if(!(/^\d{9}$/.test(num))) {
	return alert("Ingresa tu número telefonico");
	} else {
		alert("Gracias por ingresar tu número de teléfono")
	}
});

var start = document.getElementById("boton");

start.addEventListener("click", function(){
	var coorX = document.getElementById("coordinadaX").value;
	var coorY = document.getElementById("coordinadaY").value;
	

		if(coorX == "" || coorX.length == 0 || parseInt(coorX) > 10 ){
			return alert("ingresa una coordenada valida en 'X coordinate'");
		}
		if(coorY == "" || coorY.length == 0 || parseInt(coorY) > 6){
			return alert("ingresa una coordenada valida en 'Y coordinate'");
		} else {

			cuadroC.removeChild(cuadro);

			var nueva = document.createElement("div");
			nueva.setAttribute("id", "nuevoC");


			cuadroC.appendChild(nueva);
		}

});