window.onload =  function(){
	//Variables
	var id,
		drapdrop=false,
		cont=0;
	btnReinicio = document.getElementById('btnReincio');
	btnInstrucciones = document.getElementById('bntInstrucciones');
	btnClose = document.getElementById('modal-icon-close');
	//Elementos barra
	corazonBarra   = document.getElementById('img-barra-corazon');
	pulmonesBarra  = document.getElementById('img-barra-pulmones');
	higadoBarra    = document.getElementById('img-barra-higado');
	estomagoBarra  = document.getElementById('img-barra-estomago');
	cerebroBarra   = document.getElementById('img-barra-cerebro');
	intestinoBarra = document.getElementById('img-barra-intestino');
	rinonBarra     = document.getElementById('img-barra-rinon');
	//Contenedores cuerpo 
	imgCorazon   = document.getElementById('img-corazon');
	imgPulmones  = document.getElementById('img-pulmones');
	imgHigado    = document.getElementById('img-higado');
	imgEstomago  = document.getElementById('img-estomago');
	imgCerebro   = document.getElementById('img-cerebro');
	imgIntestino = document.getElementById('img-intestino');
	imgRinon     = document.getElementById('img-rinon');
	//Asignacion de Eventos Genericos
	corazonBarra.addEventListener('mousedown',getID);
	pulmonesBarra.addEventListener('mousedown',getID);
	higadoBarra.addEventListener('mousedown',getID);
	estomagoBarra.addEventListener('mousedown',getID);
	cerebroBarra.addEventListener('mousedown',getID);
	intestinoBarra.addEventListener('mousedown',getID);
	rinonBarra.addEventListener('mousedown',getID);

	corazonBarra.addEventListener('click',getID);
	pulmonesBarra.addEventListener('click',getID);
	higadoBarra.addEventListener('click',getID);
	estomagoBarra.addEventListener('click',getID);
	cerebroBarra.addEventListener('click',getID);
	intestinoBarra.addEventListener('click',getID);
	rinonBarra.addEventListener('click',getID);
	
	imgCorazon.addEventListener('mouseenter',mouseInDIv);
	imgPulmones.addEventListener('mouseenter',mouseInDIv);
	imgHigado.addEventListener('mouseenter',mouseInDIv);
	imgEstomago.addEventListener('mouseenter',mouseInDIv);
	imgCerebro.addEventListener('mouseenter',mouseInDIv);
	imgIntestino.addEventListener('mouseenter',mouseInDIv);
	imgRinon.addEventListener('mouseenter',mouseInDIv);

	imgCorazon.addEventListener('click',responseOK);
	imgPulmones.addEventListener('click',responseOK);
	imgHigado.addEventListener('click',responseOK);
	imgEstomago.addEventListener('click',responseOK);
	imgCerebro.addEventListener('click',responseOK);
	imgIntestino.addEventListener('click',responseOK);
	imgRinon.addEventListener('click',responseOK);


	function getID(){
		id = this.id;
		drapdrop=true;
		//console.log(`getID = ${this.id} drapdrop ${drapdrop}`);
	};

	/*Esta parte es la accion del drop , 
	lo que realiza el mouse en la imagen*/
	function mouseInDIv(){
		if(drapdrop==true){
			//console.log(`this id = ${this.id} id = ${id} dradrop = ${drapdrop}`);
			if( this.id.includes( id.split("-")[2] ) ){
			
				document.getElementById(id).style.display = 'none';
				document.getElementById(this.id).style.opacity = 1;
				
				cont++;

				//Mandar a llamar la funcion que muestra la info del organo 
				//if( this.id.includes( 'corazon' ) || this.id.includes( 'pulmon' ) ){

					document.getElementById(this.id).setAttribute('active', 1);
					mostrarVentana(this.id);
				//}
			}
			drapdrop=false;	
		}
		
		console.log(cont);
		if(cont==7){
			//console.log("llegue a 7");
			alert('Felicidades has completado todos los organos');
			cuestionario();
		}
	}

	function responseOK(){
		if(document.getElementById(this.id).getAttribute('active')!=null){
			//Mandar mensaje informacion del organo
			mostrarVentana(this.id);
		}
	}

	//-----------------------------------------------
    // bntInstrucciones y btnReinicio
    //-----------------------------------------------
	
    btnReinicio.addEventListener('click',function(){
    	location.reload(true);
    });

    btnInstrucciones.addEventListener('click',function(){
    	var ventana = document.getElementById('modal');
	    ventana.style.display = 'block';

	    var instrucciones = '<p><strong>Le recomendamos utilizar su dispositivo de forma horizontal para una mejor experiencia.</strong></p>';
	    instrucciones += '<p>Arrastre del recuadro vertical de color azul los órganos del cuerpo a su correspondiente posición en la imagen del cuerpo humano.</p>';
	    instrucciones += '<p>En caso de utilizar un dispositivo móvil como celular o tablet seleccione la opción presionando sobre el órgano del recuadro azul y luego en su correspondiente en el cuerpo humano.</p>';
	    instrucciones += '<p>Si se ha elegido bien se despliega la información del órgano correspondiente, si ha cerrado el recuadro de información podrá volver a desplegarlo pulsando sobre el órgano en el cuerpo humano.</p>';

	    document.getElementById('modal-titulo').innerHTML='Instrucciones';
	    document.getElementById('modal-contenido').innerHTML=instrucciones;
	    document.getElementById('modal-audio').style.display = 'none';
	    

    });

	//-----------------------------------------------
	//             Eventos del modal
	//-----------------------------------------------
	btnClose.addEventListener('click',function(){
		var ventana = document.getElementById('modal');
    	ventana.style.display = 'none';		
    	document.getElementById('modal-audio').pause();

    	if(cont==7){
    		cont=6;
    	}

	});

	function mostrarVentana(...args)
	{
	    var ventana = document.getElementById('modal');
	    ventana.style.display = 'block';
	    
	    

	    if(args.toString().includes('corazon')){
	    	contenido  = '<p>En realidad, el corazón es un músculo. Está situado en el centro del pecho, un poco hacia la izquierda y es casi del tamaño de tu puño.</p>';
	    	contenido += '<p>Pero este músculo es especial por lo que hace el corazón envía sangre a todo el cuerpo. La sangre le proporciona a tu cuerpo el oxígeno y los nutrientes que necesita. También transporta los desechos de los que debe deshacerse el organismo.</p>';
	    	contenido += '<p>El corazón es una especie de bomba, o dos bombas en una. El lado derecho del corazón recibe sangre del organismo y la bombea a los pulmones. El lado izquierdo del corazón hace exactamente lo opuesto: recibe sangre de los pulmones y la bombea a todo el cuerpo.</p>'; 
	    	contenido += '<p>El corazón está formado por cuatro áreas diferentes y cada una de éstas se conoce como cámara. Hay dos cámaras en cada lado del corazón: una arriba y otra abajo. Las dos cámaras superiores se llaman aurículas. Las aurículas son las cámaras que se llenan de sangre.</p>';
	    	contenido += '<p>Las dos cámaras de abajo se llaman ventrículos. Su tarea es expulsar la sangre. A lo largo de la mitad del corazón hay una pared gruesa de músculo llamada tabique. La tarea de este tabique es separar el lado izquierdo del lado derecho del corazón.</p>';
	    	document.getElementById('modal-titulo').innerHTML='Corazón';
	    	document.getElementById('modal-contenido').innerHTML=contenido;

	    	document.getElementById('audio').innerHTML='<audio id="modal-audio" controls><source src="audio/corazon.mp3" type="audio/mpeg"><source src="audio/corazon.ogg" type="audio/ogg">Tu navegador no soporta este elemento.</audio>';
	    }
	    
	    if(args.toString().includes('pulmon')){
	    	
	    	contenido  = '<p>Tus pulmones están en tu tórax y son tan grandes que ocupan la mayor parte del espacio disponible. Tienes dos pulmones, pero no son del mismo tamaño.</p>';
	    	contenido += '<p>El pulmón de la parte izquierda de tu cuerpo es un poco más pequeño que el de la derecha. Este espacio adicional en la izquierda da cabida a tu corazón.</p>';
	    	contenido += '<p>Tus pulmones están protegidos por la caja torácica, que está formada por 12 pares de costillas. Éstas están conectadas a tu columna en la espalda y rodean a los pulmones para mantenerlos seguros. Por debajo de los pulmones está el diafragma, un músculo en forma de bóveda que trabaja con tus pulmones para permitirte inhalar (inspirar) y exhalar (espirar) aire.</p>'; 
	    	contenido += '<p>Al final de la tráquea, hay dos grandes conductos llamados bronquios primarios.Cada bronquio primario se ramifica en otros conductos o bronquios, que van haciéndose cada vez más pequeños como si fueran las ramas de un gran árbol. Los conductos más pequeños se llaman bronquiolos y hay unos 30.000 en cada pulmón. Cada bronquiolo tiene aproximadamente el mismo grosor que un cabello.</p>';
	    	contenido += '<p>Al final de cada bronquiolo hay un área especial que lleva a unos grupos de sacos de aire muy pequeños llamados alvéolos. Cada alvéolo está cubierto por una especie de malla de vasos sanguíneos muy pequeños, llamados capilares. Estos capilares son tan pequeños que las células sanguíneas necesitan ponerse en fila para poder atravesarlos.</p>';
	    	document.getElementById('modal-titulo').innerHTML='Pulmones';
	    	document.getElementById('modal-contenido').innerHTML=contenido;

	    	document.getElementById('audio').innerHTML='<audio id="modal-audio" controls><source src="audio/pulmones.mp3" type="audio/mpeg"><source src="audio/pulmones.ogg" type="audio/ogg">Tu navegador no soporta este elemento.</audio>';
	    }

	    if(args.toString().includes('higado')){
	    	contenido =  '<p>El hígado es el órgano sólido más grande del cuerpo. El hígado realiza muchos trabajos, pero los tres más importantes son los siguientes:</p>';
	    	contenido += '<ul><li>Purifica la sangre.</li><li>Produce un líquido digestivo importante, denominado “bilis”.</li><li>Almacena energía en forma de azúcar, denominada “glucógeno”.</li></ul>';
	    	contenido += '<p>El hígado te ayuda porque elimina las toxinas presentes en la sangre. A veces, el cuerpo las produce como parte de su funcionamiento normal, por ejemplo, al descomponer las proteínas, un componente de algunos alimentos, como la carne y los frutos secos.</p>';	
	    	contenido += '<p>El hígado también purifica la sangre que ha sido enriquecida con vitaminas y minerales durante la digestión. Después de comer algo, las vitaminas, los minerales y otros nutrientes presentes en los alimentos pasan del intestino a la sangre. Antes de pasar el resto del cuerpo, la sangre rica en nutrientes se detiene en el hígado.</p>';
	    	contenido += '<p>El hígado procesa los elementos beneficiosos para que el resto del cuerpo pueda utilizarlos. Cualquier desecho o elemento que el cuerpo no necesite es llevado por la bilis de regreso al intestino y se elimina al ir al baño.</p>';
	    	document.getElementById('modal-titulo').innerHTML='Hígado';
			document.getElementById('modal-contenido').innerHTML=contenido;

			document.getElementById('audio').innerHTML='<audio id="modal-audio" controls><source src="audio/higado.mp3" type="audio/mpeg"><source src="audio/higado.ogg" type="audio/ogg">Tu navegador no soporta este elemento.</audio>';

	    }

	    if(args.toString().includes('estomago')){
	    	contenido =  '<p>El estómago está unido al extremo inferior del esófago. Se trata de un "saco" elástico que tiene la forma de la letra "j". Desempeña tres funciones importantes:</p>';
	    	contenido += '<ul><li>Almacenar la comida que ingieres.</li><li>Descomponer los alimentos en una mezcla líquida.</li><li>Vaciar lentamente ese líquido al intestino delgado.</li></ul>';
	    	contenido += '<p>El estómago actúa como una batidora, mezclando y triturando todas las bolitas de alimento procedentes del esófago en fragmentos cada vez más pequeños. Esto lo hace con la ayuda de los fuertes músculos que tiene en sus paredes y los jugos gástricos que éstas segregan. Aparte de fragmentar y descomponer la comida, los jugos gástricos también ayudan a destruir los gérmenes y bacterias que pueden contener los alimentos que ingieres.</p>';
	    	contenido += '<p>En el caso del ser humano, el estómago se halla en la cavidad abdominal y es uno de los órganos de mayor tamaño, pudiendo incluso agrandarse ya que su tejido es elástico a diferencia de otros órganos. </p>';
	    	contenido += '<p>El estómago es esencial en el proceso digestivo por dos razones básicas: en primer lugar, porque es el espacio que sirve de depósito o reservorio de toda la comida que luego será procesada. </p>';
	    	contenido += '<p>Mientras el resto de los órganos sólo son tejidos de traspaso o de circulación de esa materia, el estómago es el único en el cual la misma permanece. Aquí es donde entra la segunda razón: el estómago además de ser el depósito es también el órgano que ejecuta la parte más importante de transformación de lo que antes era alimento en nutrientes que puedan ser luego asimilados por el organismo o desechados. Así, el estómago deja la materia alimenticia preparada para que la misma circule sin mayor dificultad por el intestino o sea desechada posteriormente.</p>';
	    	document.getElementById('modal-titulo').innerHTML='Estómago';
	    	document.getElementById('modal-contenido').innerHTML=contenido;

	    	document.getElementById('audio').innerHTML='<audio id="modal-audio" controls><source src="audio/estomago.mp3" type="audio/mpeg"><source src="audio/estomago.ogg" type="audio/ogg">Tu navegador no soporta este elemento.</audio>';
	    }

	    if(args.toString().includes('cerebro')){
	    	contenido =  '<p>De hecho, el cerebro es el jefe de tu cuerpo. Dirige todo, controlando casi todo lo que haces, aun cuando estás durmiendo. Esto es increíble, teniendo en cuenta que parece una gran esponja gris y arrugada.El cerebro está formado por varias partes que trabajan en conjunto:</p>';
	    	contenido += '<ul><li>Cerebro</li><li>Cerebelo</li><li>Tronco encefálico</li><li>Glándula pituitaria</li><li>Hipotálamo</li></ul>';
	    	contenido += '<p>La parte más grande del encéfalo es el cerebro. El cerebro constituye el 85% del encéfalo y es fácil ver. El cerebro es la parte "pensante" del encéfalo y el que controla los músculos de movimiento voluntario es decir los músculos que se mueven cuando tú lo deseas.</p>';
	    	contenido += '<p>Tu memoria, tanto a corto plazo, como a largo plazo vive en el cerebro. El cerebro también te ayuda a razonar.</p>';
	    	contenido += '<p>El cerebro está formado por dos mitades, una a cada lado de la cabeza. Los científicos creen que la mitad derecha del cerebro se utiliza para las cosas abstractas, como la música, los colores y las formas. Se cree que la parte izquierda es la que se utiliza para el razonamiento analítico, para ayudarte con la matemática, la lógica y el habla. Los científicos saben con certeza que la parte derecha del cerebro controla la parte izquierda del cuerpo y que la parte izquierda controla la derecha.</p>';

	    	document.getElementById('modal-titulo').innerHTML='Cerebro';
	    	document.getElementById('modal-contenido').innerHTML=contenido;

	    
	    	document.getElementById('audio').innerHTML='<audio id="modal-audio" controls><source src="audio/cerebro.mp3" type="audio/mpeg"><source src="audio/cerebro.ogg" type="audio/ogg">Tu navegador no soporta este elemento.</audio>';
	    }

	    if(args.toString().includes('intestino')){
	    	contenido =  '<p>El intestino delgado es un tubo largo, con un diámetro o contorno entre 3,5 y 5 centímetros, que está replegado sobre sí mismo en tu interior, debajo del estómago. Si extendieras completamente tu intestino delgado, mediría aproximadamente 6,7 metros de largo.</p>';
	    	contenido += '<p>El intestino delgado desempeña la importante función de descomponer la mezcla de alimentos procedente del estómago todavía más, para que tu cuerpo pueda absorber todos los nutrientes que contiene: vitaminas, minerales, proteínas, hidratos de carbono, y grasas.</p>';
	    	contenido += '<p>El pollo asado contiene muchas proteínas  y un poco de grasa  y el intestino delgado te ayudará a absorberlas, siempre y cuando sus amigos  el páncreas, el hígado y la vesícula biliar  le echen una mano.</p>'; 
	    	contenido += '<p>Los órganos que acabamos de mencionar envían distintos jugos a la primera porción del intestino delgado. Estos jugos ayudan a digerir los alimentos y permiten que el cuerpo absorba los nutrientes que contienen. El páncreas fabrica unos jugos que ayudan al organismo a digerir las grasas y las proteínas. Un jugo que segrega el hígado llamado bilis ayuda a que se absorban las grasas en el torrente sanguíneo. Y la vesícula biliar es como un almacén de bilis, donde se almacena este jugo para cuando el cuerpo lo necesite.</p>';
	    	contenido += '<p>Los alimentos que ingieres pueden permanecer hasta 4 horas en tu intestino delgado, hasta que se convierten en una mezcla líquida y acuosa. Es un tiempo bien empleado, porque, al final del viaje, los nutrientes procedentes de la pizza, el pollo, la naranja y la leche podrán pasar del intestino a la sangre. Una vez en la sangre, tu cuerpo estará mucho más cerca de aprovechar los hidratos de carbono complejos contenidos en la masa de la pizza, la vitamina C de la naranja, las proteínas del pollo y el calcio de la leche.</p>';
	    	document.getElementById('modal-titulo').innerHTML='Intestino';
	    	document.getElementById('modal-contenido').innerHTML=contenido;

	    	document.getElementById('audio').innerHTML='<audio id="modal-audio" controls><source src="audio/intestino.mp3" type="audio/mpeg"><source src="audio/intestino.ogg" type="audio/ogg">Tu navegador no soporta este elemento.</audio>';
	    }

	    if(args.toString().includes('rinon')){
	    	contenido =  '<p>Los riñones hacen muchas cosas, pero su trabajo más importante es eliminar los desechos de la sangre y fabricar la orina. El tracto urinario transporta estos desechos hacia fuera del cuerpo cuando una persona hace orina. </p>';
	    	contenido += '<p>Los riñones normalmente van en pares. Cada riñón mide unos 13 cm (unas 5 pulgadas) de largo y unos 8 cm (unas 3 pulgadas) de ancho y tiene aproximadamente el tamaño de un ratón de ordenador.</p>';
	    	contenido += '<p>Para localizar los riñones en tu cuerpo, ponte las manos sobre las caderas y luego deslízalas hacia arriba hasta palparte las costillas. Luego ponte los pulgares en la espalda y sabrás dónde tienes los riñones. No los notarás, pero están ahí.</p>';
	    	contenido += '<p>Una de las principales funciones de los riñones consiste en filtrar los productos de desecho de la sangre. ¿Cómo llegan esos productos de desecho a la sangre? Pues bien, la sangre reparte nutrientes por todo el cuerpo. En las células se producen reacciones químicas para descomponer y procesar esos nutrientes. Parte de los productos de desecho son el resultado de esas reacciones químicas. Otra parte solo es la materia que el cuerpo no necesita porque ya tiene suficiente. Esos residuos tienen que ir a algún sitio; y es ahí donde los riñones entran en juego.</p>';
	    	contenido += '<p>La sangre es transportada hasta los riñones por la arteria renal (todas las cosas del cuerpo relacionadas con los riñones se denominan “renales”). Una persona promedio tiene entre 3,7 y 5,7 litros de sangre (de 1 a 1,5 galones) circulando por el cuerpo. ¡Los riñones filtran esa sangre aproximadamente 400 veces al día! Más de un millón de pequeños filtros que se encuentran en el interior de los riñones eliminan los productos de desecho. Estos filtros, denominados nefronas, son tan diminutos que solo se pueden ver utilizando un microscopio muy potente.</p>';
	    	document.getElementById('modal-titulo').innerHTML='Riñón';
	    	document.getElementById('modal-contenido').innerHTML=contenido;
	    		
	    	document.getElementById('audio').innerHTML='<audio id="modal-audio" controls><source src="audio/rinon.mp3" type="audio/mpeg"><source src="audio/rinon.ogg" type="audio/ogg">Tu navegador no soporta este elemento.</audio>';
	    }
	}

	//-------------------------------------------------
	//			Calificar cuestionario
	//-------------------------------------------------

	function cuestionario(){
		var ventana = document.getElementById('modal');
	    ventana.style.display = 'block';

	    var contenido = '<form><div><h2>Quizz</h2></div>';
	    	contenido += '<div><p>¿Cuál pulmón es el más pequeño?</p><input type="radio" name="pregunta01" value="0">El derecho<input type="radio" name="pregunta01" value="0.66">El izquierdo<input type="radio" name="pregunta01" value="0">Son del mismo tamaño</div>';
	    	contenido += '<div><p>¿Cuantas cámaras tiene en total el corazón?</p><input type="radio" name="pregunta02" value="0">No tiene cámaras<input type="radio" name="pregunta02" value="0">2<input type="radio" name="pregunta02" value="0.66">4</div>';
			contenido += '<div><p>La caja torácica, que está formada por... </p> <input type="radio" name="pregunta03" value="0.66">12 pares de costillas<input type="radio" name="pregunta03" value="0">10 pares de costillas<input type="radio" name="pregunta03" value="0">12 costillas</div>';
			contenido += '<div><p>Al final de la tráquea, hay dos grandes conductos llamados ...</p><input type="radio" name="pregunta04" value="0.66">bronquios primarios<input type="radio" name="pregunta04" value="0">bronquiolos<input type="radio" name="pregunta04" value="0">ventrículos</div>';
			contenido += '<div><p>¿Está situado en el centro del pecho, un poco hacia la izquierda y es casi del tamaño de tu puño?</p><input type="radio" name="pregunta05" value="0">Riñón<input type="radio" name="pregunta05" value="0">Hígado<input type="radio" name="pregunta05" value="0.6">Corazón</div>';
			contenido += '<div><p>¿Selecciona una de las tareas que hace el hígado?</p><input type="radio" name="pregunta06" value="0">Almacenar la comida que ingieres<input type="radio" name="pregunta06" value="0.66">Descomponer la mezcla de alimentos<input type="radio" name="pregunta06" value="0">Purifica la sangre</div>';
			contenido += '<div><p>El hígado te ayuda porque elimina las toxinas presentes en la…</p><input type="radio" name="pregunta07" value="0">Piel <input type="radio" name="pregunta07" value="0">Boca<input type="radio" name="pregunta07" value="0.66">Sangre</div>';
			contenido += '<div><p>¿Órgano cuyo tejido es elástico, puede agrandarse y es esencial en el proceso digestivo?</p><input type="radio" name="pregunta08" value="0.66">Estomago<input type="radio" name="pregunta08" value="0">Vesícula<input type="radio" name="pregunta08" value="0">Páncreas</div>';
			contenido += '<div><p>Aparte de fragmentar y descomponer la comida, los jugos gástricos también ayudan a…</p><input type="radio" name="pregunta09" value="0.66">Destruir los gérmenes y bacterias<input type="radio" name="pregunta09" value="0">La circulación de sangre<input type="radio" name="pregunta09" value="0">Mantener el pulso cardiaco </div>';
			contenido += '<div><p>¿Qué porcentaje constituye el cerebro  del encéfalo?</p><input type="radio" name="pregunta10" value="0">El 90%<input type="radio" name="pregunta10" value="0">El 100%<input type="radio" name="pregunta10" value="0.66">El 85%</div>';
			contenido += '<div><p>¿Qué mitad del cerebro es la que se cree que se utiliza para las cosas abstractas, como la música, los colores y las formas ?</p><input type="radio" name="pregunta11" value="0">La izquierda<input type="radio" name="pregunta11" value="0.66">La derecha<input type="radio" name="pregunta11" value="0">Ambas </div>';
			contenido += '<div><p>Los alimentos que ingieres pueden permanecer en tu intestino delgado, hasta que se convierten en una mezcla líquida y acuosa, este proceso puede tardar hasta…</p><input type="radio" name="pregunta12" value="0">1 dia<input type="radio" name="pregunta12" value="0">3 meses<input type="radio" name="pregunta12" value="0.66">4 horas</div>';
			contenido += '<div><p>¿Dónde se ubica el intestino delgado?</p><input type="radio" name="pregunta13" value="0.66">Debajo del estómago<input type="radio" name="pregunta13" value="0">Cerca del corazón<input type="radio" name="pregunta13" value="0">Arriba de los pulmones </div>';
			contenido += '<div><p>Los riñones hacen muchas cosas, pero su trabajo más importante es… </p><input type="radio" name="pregunta14" value="0">Almacenar el aire que respiramos<input type="radio" name="pregunta14" value="0.76">Eliminar los desechos de la sangre y fabricar la orina<input type="radio" name="pregunta14" value="0.76">Filtrar los productos de desecho de la sangre</div>';
			contenido += '<div><p>¿Cuánto mide de largo y ancho los riñones?</p><input type="radio" name="pregunta15" value="0.66">Unos 13 cm de largo y unos 8 cm de ancho<input type="radio" name="pregunta15" value="0">Unos 8 cm de largo y unos 13 cm de ancho <input type="radio" name="pregunta15" value="0">Unos 5 cm de largo y unos 8 cm de ancho </div>';




			contenido += '<br><br><input type="button" value="Calificar" onclick="calificar()">';
			contenido += '</form>';
	    document.getElementById('modal-titulo').innerHTML='Quist';
	    document.getElementById('modal-contenido').innerHTML=contenido;
	    document.getElementById('modal-audio').style.display = 'none';
	}

}

function calificar(){
		var x = 0; 
		try{
			x += parseFloat(document.querySelector('input[name="pregunta01"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta02"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta03"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta04"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta05"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta06"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta07"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta08"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta09"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta10"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta11"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta12"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta13"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta14"]:checked').value);
			x += parseFloat(document.querySelector('input[name="pregunta15"]:checked').value);
		}catch(err){
			console.log(err);
		}
		
		alert('Tu calificacón final es de '+x.toFixed(2));
	}
