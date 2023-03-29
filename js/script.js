function calcularResultado()
{
	let tasaAnual = document.getElementById("tasa").value;
	let semanas = document.getElementById("semanas").value;
	let periodo = document.getElementById("periodo").value;
	let montoSemanal = document.getElementById("montoSemanal").value;
	let inversionInicial = document.getElementById("inversionInicial").value;

	let tasa = obtenerTasa(periodo, tasaAnual);
	let totalInvertido = (montoSemanal * semanas) + parseFloat (inversionInicial);
	let saldo = calcularSaldo(inversionInicial, semanas, montoSemanal, tasa);
	let ganancia = saldo - totalInvertido;

	document.getElementById("totalInvertido").value = totalInvertido.toFixed(2);
	document.getElementById("saldo").value = saldo.toFixed(2);
	document.getElementById("ganancia").value = ganancia.toFixed(2);

	console.log(periodo);
	// crearTabla(inversionInicial, semanas, montoSemanal, tasa, periodo);
}

// function cambiarPeriodo()
// {
// 	switch (periodo)
// 	{
// 		case "Diario":
// 			document.getElementById("lblPeriodo").innerHTML = "Días de inversión";
// 			break;
// 		case "Semanal":
// 			document.getElementById("lblPeriodo").innerHTML = "Semanas de inversión";
// 			break;
// 		case "Quincenal":
// 			document.getElementById("lblPeriodo").innerHTML = "Quincenas de inversión";
// 			break;
// 		case "Mensual":
// 			document.getElementById("lblPeriodo").innerHTML = "Meses de inversión";
// 			break;
// 		case "Trimestral":
// 			document.getElementById("lblPeriodo").innerHTML = "Trimestres de inversión";
// 			break;
// 		case "Anual":
// 			document.getElementById("lblPeriodo").innerHTML = "Años de inversión";
// 			break;
// 	}
// }

function obtenerTasa(periodo, tasaAnual)
{
	let tasa;
	switch (periodo)
	{
		case "Diario":
			tasa = tasaAnual / 360      /100;
			break;
		case "Semanal":
			tasa = tasaAnual / 360 * 7  /100;
			break;
		case "Quincenal":
			tasa = tasaAnual / 360 * 15 /100;
			break;
		case "Mensual":
			tasa = tasaAnual / 360 * 30 /100;
			break;
		case "Trimestral":
			tasa = tasaAnual / 360 * 90 /100;
			break;
		case "Anual":
			tasa = tasaAnual /100;
			break;
	}
	return tasa;
}

function calcularSaldo(inversionInicial, numeroSemanas, montoSemanal, tasa)
{
	let saldo = parseFloat(inversionInicial);
	let interes = 0;

	//numero de semanas = periodo
	for (let i = 1; i <= numeroSemanas; i++) 
	{
		saldo += parseFloat(montoSemanal);
		interes = saldo * tasa;
		saldo += interes;
	}

	return saldo;
}

function crearTabla(inversionInicial, semanas, montoSemanal, tasa, periodo)
{
	let divTabla = document.getElementById("divTabla");
	let periodo2 = "";

	switch(periodo)
	{
		case "Diario":
			if(semanas == 0)
				divTabla.innerHTML = "<h3>Para poder mostrar el saldo por días, debe de invertir al menos por una semana</h3>";
			else
			{
				divTabla.innerHTML = "<table class='border border-dark' id='tabla'><tr><th>Número de días<th>Monto </th><th>Saldo sin intereses </th><th>Intereses</th><th>Saldo con intereses</th></tr></table>";
				for (var i = 1; i <= semanas * 7; i++) 
				{
					let tabla = document.getElementById("tabla").insertRow(i);
					let col1 = tabla.insertCell(0);
					let col2 = tabla.insertCell(1);
					let col3 = tabla.insertCell(2);
					let col4 = tabla.insertCell(3);
					let col5 = tabla.insertCell(4);
	        //Número de día
					col1.innerHTML = i;

	        //Monto
					if(i == 1)
					{
						suma = parseFloat(inversionInicial) + parseFloat(montoSemanal);
						col2.innerHTML = "$" + suma.toFixed(2);
					}
					else if((i-1) % 7 == 0)
					{
						col2.innerHTML = "$" + montoSemanal;
						monto = montoSemanal;
					}
					else
					{
						col2.innerHTML = "$0.00";
						monto = 0;
					}

	        //Saldo sin interes
					if(i == 1)
					{
						col3.innerHTML = "$" + suma.toFixed(2);
						saldoSinInteres = suma;
					}
					else
					{
						saldoSinInteres = parseFloat(saldoConIntereses) + parseFloat(monto);
						col3.innerHTML = "$" + saldoSinInteres.toFixed(2);
					}

	        //Intereses
					intereses = saldoSinInteres * tasa;
					col4.innerHTML = "$" + intereses.toFixed(2);

	        //Saldo con interes
					saldoConIntereses = parseFloat(saldoSinInteres) + parseFloat(intereses);
					col5.innerHTML = "$" + saldoConIntereses.toFixed(2);
				}
			}
			break;
		case "Semanal":
			if(semanas == 0)
				divTabla.innerHTML = "<h3>Para poder mostrar el saldo por semanas, debe de invertir al menos por una semana</h3>";
			else
			{
				divTabla.innerHTML = "<table class='border border-dark' id='tabla'><tr><th>Número de semanas<th>Monto </th><th>Saldo sin intereses </th><th>Intereses</th><th>Saldo con intereses</th></tr></table>";
				for (var i = 1; i <= semanas; i++) 
				{
					let tabla = document.getElementById("tabla").insertRow(i);
					let col1 = tabla.insertCell(0);
					let col2 = tabla.insertCell(1);
					let col3 = tabla.insertCell(2);
					let col4 = tabla.insertCell(3);
					let col5 = tabla.insertCell(4);
	    		//Número de semana
					col1.innerHTML = i;

	    		//Monto
					if(i == 1)
					{
						suma = parseFloat(inversionInicial) + parseFloat(montoSemanal);
						col2.innerHTML = "$" + suma.toFixed(2);
					}
					else
					{
						col2.innerHTML = "$" + montoSemanal;
						monto = montoSemanal;
					}

	    		//Saldo sin interes
					if(i == 1)
					{
						col3.innerHTML = "$" + suma.toFixed(2);
						saldoSinInteres = suma;
					}
					else
					{
						saldoSinInteres = parseFloat(saldoConIntereses) + parseFloat(monto);
						col3.innerHTML = "$" + saldoSinInteres.toFixed(2);
					}

	    		//Intereses
					intereses = saldoSinInteres * tasa;
					col4.innerHTML = "$" + intereses.toFixed(2);

	    		//Saldo con interes
					saldoConIntereses = parseFloat(saldoSinInteres) + parseFloat(intereses);
					col5.innerHTML = "$" + saldoConIntereses.toFixed(2);
				}
			}
			break;
		case "Quincenal":
			if(semanas < 2)
				divTabla.innerHTML = "<h3>Para poder mostrar el saldo por quincenas, debe de invertir al menos por dos semanas</h3>";
			else
			{
				let posicion = 1;
				divTabla.innerHTML = "<table class='border border-dark' id='tabla'><tr><th>Número de quincenas<th>Monto </th><th>Saldo sin intereses </th><th>Intereses</th><th>Saldo con intereses</th></tr></table>";
				quincenas = semanas / 2;
				for (var i = 1; i <= quincenas; i++) 
				{
					let tabla = document.getElementById("tabla").insertRow(posicion);
					let col1 = tabla.insertCell(0);
					let col2 = tabla.insertCell(1);
					let col3 = tabla.insertCell(2);
					let col4 = tabla.insertCell(3);
					let col5 = tabla.insertCell(4);
		    		//Número de quincena
					col1.innerHTML = posicion;
					posicion++;

		    		//Monto
					if(i == 1)
					{
						suma = parseFloat(inversionInicial) + (parseFloat(montoSemanal) * 2);
						col2.innerHTML = "$" + suma.toFixed(2);
					}
					else
					{
						col2.innerHTML = "$" + (montoSemanal * 2).toFixed(2);
						monto = montoSemanal * 2;
					}

		    		//Saldo sin interes
					if(i == 1)
					{
						col3.innerHTML = "$" + suma.toFixed(2);
						saldoSinInteres = suma;
					}
					else
					{
						saldoSinInteres = parseFloat(saldoConIntereses) + parseFloat(monto);
						col3.innerHTML = "$" + saldoSinInteres.toFixed(2);
					}

		    		//Intereses
					intereses = saldoSinInteres * tasa;
					col4.innerHTML = "$" + intereses.toFixed(2);

		    		//Saldo con interes
					saldoConIntereses = parseFloat(saldoSinInteres) + parseFloat(intereses);
					col5.innerHTML = "$" + saldoConIntereses.toFixed(2);
				}
			}
			break;
		case "Mensual":
			if(semanas < 4)
				divTabla.innerHTML = "<h3>Para poder mostrar el saldo por meses, debe de invertir al menos por cuatro semanas</h3>";
			else
			{
				let posicion = 1;
				divTabla.innerHTML = "<table class='border border-dark' id='tabla'><tr><th>Número de meses<th>Monto </th><th>Saldo sin intereses </th><th>Intereses</th><th>Saldo con intereses</th></tr></table>";
				meses = semanas / 4;
				for (var i = 1; i <= meses; i++) 
				{
					let tabla = document.getElementById("tabla").insertRow(posicion);
					let col1 = tabla.insertCell(0);
					let col2 = tabla.insertCell(1);
					let col3 = tabla.insertCell(2);
					let col4 = tabla.insertCell(3);
					let col5 = tabla.insertCell(4);
		    		//Número de quincena
					col1.innerHTML = posicion;
					posicion++;

		    		//Monto
					if(i == 1)
					{
						suma = parseFloat(inversionInicial) + (parseFloat(montoSemanal) * 4);
						col2.innerHTML = "$" + suma.toFixed(2);
					}
					else
					{
						col2.innerHTML = "$" + (montoSemanal * 4).toFixed(2);
						monto = montoSemanal * 4;
					}

		    		//Saldo sin interes
					if(i == 1)
					{
						col3.innerHTML = "$" + suma.toFixed(2);
						saldoSinInteres = suma;
					}
					else
					{
						saldoSinInteres = parseFloat(saldoConIntereses) + parseFloat(monto);
						col3.innerHTML = "$" + saldoSinInteres.toFixed(2);
					}

		    		//Intereses
					intereses = saldoSinInteres * tasa;
					col4.innerHTML = "$" + intereses.toFixed(2);

		    		//Saldo con interes
					saldoConIntereses = parseFloat(saldoSinInteres) + parseFloat(intereses);
					col5.innerHTML = "$" + saldoConIntereses.toFixed(2);
				}
			}
			break;
		case "Trimestral":
			if(semanas < 12)
				divTabla.innerHTML = "<h3>Para poder mostrar el saldo por trimestre, debe de invertir al menos por doce semanas</h3>";
			else
			{
				let posicion = 1;
				divTabla.innerHTML = "<table class='border border-dark' id='tabla'><tr><th>Número de trimestres<th>Monto </th><th>Saldo sin intereses </th><th>Intereses</th><th>Saldo con intereses</th></tr></table>";
				trimestres = semanas / 12;
				for (var i = 1; i <= trimestres; i++) 
				{
					let tabla = document.getElementById("tabla").insertRow(posicion);
					let col1 = tabla.insertCell(0);
					let col2 = tabla.insertCell(1);
					let col3 = tabla.insertCell(2);
					let col4 = tabla.insertCell(3);
					let col5 = tabla.insertCell(4);
		    		//Número de quincena
					col1.innerHTML = posicion;
					posicion++;

		    		//Monto
					if(i == 1)
					{
						suma = parseFloat(inversionInicial) + (parseFloat(montoSemanal) * 12);
						col2.innerHTML = "$" + suma.toFixed(2);
					}
					else
					{
						col2.innerHTML = "$" + (montoSemanal * 12).toFixed(2);
						monto = montoSemanal * 12;
					}

		    		//Saldo sin interes
					if(i == 1)
					{
						col3.innerHTML = "$" + suma.toFixed(2);
						saldoSinInteres = suma;
					}
					else
					{
						saldoSinInteres = parseFloat(saldoConIntereses) + parseFloat(monto);
						col3.innerHTML = "$" + saldoSinInteres.toFixed(2);
					}

		    		//Intereses
					intereses = saldoSinInteres * tasa;
					col4.innerHTML = "$" + intereses.toFixed(2);

		    		//Saldo con interes
					saldoConIntereses = parseFloat(saldoSinInteres) + parseFloat(intereses);
					col5.innerHTML = "$" + saldoConIntereses.toFixed(2);
				}
			}
			break;
		case "Anual":
			if(semanas < 52)
				divTabla.innerHTML = "<h3>Para poder mostrar el saldo por años, debe de invertir al menos por cincuenta y dos semanas</h3>";
			else
			{
				let posicion = 1;
				divTabla.innerHTML = "<table class='border border-dark' id='tabla'><tr><th>Número de años<th>Monto </th><th>Saldo sin intereses </th><th>Intereses</th><th>Saldo con intereses</th></tr></table>";
				anos = semanas / 52;
				for (var i = 1; i <= anos; i++) 
				{
					let tabla = document.getElementById("tabla").insertRow(posicion);
					let col1 = tabla.insertCell(0);
					let col2 = tabla.insertCell(1);
					let col3 = tabla.insertCell(2);
					let col4 = tabla.insertCell(3);
					let col5 = tabla.insertCell(4);
		    		//Número de quincena
					col1.innerHTML = posicion;
					posicion++;

		    		//Monto
					if(i == 1)
					{
						suma = parseFloat(inversionInicial) + (parseFloat(montoSemanal) * 52);
						col2.innerHTML = "$" + suma.toFixed(2);
					}
					else
					{
						col2.innerHTML = "$" + (montoSemanal * 52).toFixed(2);
						monto = montoSemanal * 52;
					}

		    		//Saldo sin interes
					if(i == 1)
					{
						col3.innerHTML = "$" + suma.toFixed(2);
						saldoSinInteres = suma;
					}
					else
					{
						saldoSinInteres = parseFloat(saldoConIntereses) + parseFloat(monto);
						col3.innerHTML = "$" + saldoSinInteres.toFixed(2);
					}

		    		//Intereses
					intereses = saldoSinInteres * tasa;
					col4.innerHTML = "$" + intereses.toFixed(2);

		    		//Saldo con interes
					saldoConIntereses = parseFloat(saldoSinInteres) + parseFloat(intereses);
					col5.innerHTML = "$" + saldoConIntereses.toFixed(2);
				}
			}
			break;
			break;
	}
}