

 ///////Un boton activa o xogo chamando esta función/////////

 function comeza(){ 

 	var resposta = prompt('¿que conta queres facer? sumar ou multiplicar');
 	var contador =0;
 	var boton=1;

/////Co var boton fago que podas volver a xogar/////////
while(boton){  
	 ////////Pregunta ao alumno se quere sumarou multiplicar//////////
	 switch(resposta){

	 	case 'sumar':
	 ///////// fai a conta 3 veces/////////////
	 for (var i=1; i<= 3; i++) { 

		//////////Os datos son aleatorios/////////////
		var misterio = Math.random();
		misterio = misterio*10;
		misterio = Math.round(misterio)
		var misterio2 = Math.random();
		misterio2 = misterio2*10;
		misterio2 = Math.round(misterio2)


		/////////reultado co que comparar /////////
		var resultado = (misterio2+misterio);

		////////A conta en si///////
		var p1= prompt('suma '+misterio2 + ' + '+misterio);

		////////Se hacerta felicitaselle e sumanse 10 puntos, se falla mala sorte//////
		if(p1 == resultado)
		{
			alert('CORRECTO, felicidades')
			contador = contador+10;
			alert('tes ' + contador + ' puntos');
		} 
		else 
		{
			alert('Incorrecto, mala sorte')
		}

		/////////Se acerta as 3 preguntas tengo unha felicitacion especial////////
		if (contador == 30){
			alert('Conseguiches a máxima puntuación, ¡FELICIDADES!')
			document.getElementById('parrafo').innerHTML = ('Conseguiches a máxima puntuación, ¡FELICIDADES!')
		}
	}
	alert('Conseguiches '+contador+' puntos')

	break;

	case 'multiplicar':
	for (var i=1; i<= 3; i++) {
		var misterio = Math.random();
		misterio = misterio*9;
		misterio = Math.round(misterio)
		var misterio2 = Math.random();
		misterio2 = misterio2*9;
		misterio2 = Math.round(misterio2)

		var resultado = (misterio2*misterio);
		var p1= prompt('multiplica '+misterio2 + ' X '+misterio);

		if(p1 == resultado)
		{
			alert('CORRECTO, felicidades')
			contador = contador+10;
			alert('tes ' + contador + ' puntos');
		} 
		else 
		{
			alert('Incorrecto, mala sorte')
		}

		if (contador == 30){
			alert('Conseguiches a máxima puntuación, ¡FELICIDADES!')
			document.getElementById('parrafo').innerHTML = ('Conseguiches a máxima puntuación, ¡FELICIDADES!')
		}
	}
	alert('Conseguiches '+contador+' puntos')
	break;
}
/////Co var boton fago que podas volver a xogar/////////
boton = confirm('¿Queres probar outra vez?')
}

}