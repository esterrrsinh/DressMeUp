var capture;
var r,g,b, opacity;
var contador=0, preguntatienda=1;
var input, button;
var text_eligetienda, text_ayuda1, text_ayuda2;
var canvas;
var inicio = 1;
var img;
var tipoprenda=0;
var nametienda;
var camisetas, camisas, pantalones, abrigos, faldas, sudaderas;
var precio1,precio2,precio3,precio4,precio5,precio6;
var flag = 0;

function setup() {
	canvas = createCanvas(750, 563);
	canvas.position(250,0);
	//capture = createCapture(VIDEO);
	//capture.size(750, 563);
	 
	r = 63;
	g = 158;
	b = 242;
	opacity = 127; 
}

function draw() {
	background(255, 255, 153);
	//image(capture, 0, 0, 750, 563);
  
	// Dibujar una mano
	strokeWeight(2);
	stroke(r, g, b);
	fill(r, g, b, opacity);
	translate(375, 281);
	noStroke();
	for (var i = 0; i < 10; i ++) {
		ellipse(0, 30, 20, 80);
		rotate(PI/5);
	}  
	if (contador == 2) { //MENÚ DONDE SE SOLICITA NOMBRE DE LA TIENDA Y CUADRO DE AYUDA
		inicio=0;
		strokeWeight(2);
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(-150, -200, 300, 120); 
		rect(-150, 50, 300, 120);
	}
	if (contador == 3) { //MENÚ DONDE SE MUESTRAN LOS TIPOS DE PRENDAS
		
		inicio=0;
		strokeWeight(2);
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(-250, -250, 500, 50); 
		
		strokeWeight(2);
		stroke(r, g, b);
		fill(r, g, b, 127);
		
		img0_1 = createImg("http://www.dibujalia.com/data/media/39/ropa-017.jpg");
		img0_2 = createImg("http://4.bp.blogspot.com/-EYi0eyExoSU/U-DYDk7jBOI/AAAAAAABfhI/3R9jZnokVWs/s1600/Pantalon+(16).jpg");
		img0_3 = createImg("http://1.bp.blogspot.com/-mGh2XO3dfWg/U-C7Zp-RAnI/AAAAAAABe9E/_y7g1BSE8qY/s1600/Abrigo.gif");
		img0_4 = createImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oLJwAJ5UY-FIAuMPaXa1exrEtqJTsLmXJDlNaHz0Od5jpXF0");
		img0_5 = createImg("http://4.bp.blogspot.com/-2qwjCfy7PAs/U-DIuOYBgKI/AAAAAAABfNI/apeV_WB37GA/s1600/Camisa+(17).jpg");
		img0_6 = createImg("https://st.depositphotos.com/1000419/3871/v/950/depositphotos_38717719-stock-illustration-abstract-sweatshirt-sketch-for-your.jpg");

		//Camisetas
		rect(-300, -150, 180, 180); 
		img0_1.position(350, 140);
		img0_1.size(130, 130);
			
		//Pantalones
		rect(-100, -150, 180, 180); 
		img0_2.position(550, 140);
		img0_2.size(130, 130);
		
		//Abrigos
		rect(100, -150, 180, 180);
		img0_3.position(750, 140);
		img0_3.size(130, 130);
		
		//Sudaderas
		rect(-300, 50, 180, 180);
		img0_4.position(750, 340);
		img0_4.size(130, 130);
		
		//Camisas
		rect(-100, 50, 180, 180);
		img0_5.position(550, 340);
		img0_5.size(130, 130);
		
		//Faldas
		rect(100, 50, 180, 180);	
		img0_6.position(350, 340);
		img0_6.size(130, 130);
		
		//Flecha
		img_flecha = createImg("http://www.iconsdb.com/icons/download/caribbean-blue/arrow-left-256.gif");
		img_flecha.position(300, 30);
		img_flecha.size(50, 50);
	}
	
	if(contador == 4) { //MENÚ DONDE SE MUESTRAN LAS PRENDAS CONCRETAS DE CADA TIPO
		inicio=0;
		
		//Titulo con nombre tienda y tipo prenda
		strokeWeight(2);
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(-250, -270, 500, 40); 
		rect(-250, -220, 500, 40);
		
		/*nametienda = createP("NOMBRE TIENDA");
		nametienda.position(500, -10);
		nametienda.style("font-family", "Helvetica");
		nametienda.style("color", "#FFFFFF");
		nametienda.style("font-size", "20pt");
		nametienda.style("font-weight", "bold");*/
		
		//Cuadrados
		strokeWeight(2);
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(-300, -150, 180, 180); 
		rect(-100, -150, 180, 180);
		rect(100, -150, 180, 180);
		rect(-300, 50, 180, 180);
		rect(-100, 50, 180, 180);
		rect(100, 50, 180, 180);
		
		if(tipoprenda == 1) { //Camisetas
			var tiprenda1 = createP("CAMISETAS");
			tiprenda1.position(550, 38);
			tiprenda1.style("font-family", "Helvetica");
			tiprenda1.style("color", "#FFFFFF");
			tiprenda1.style("font-size", "20pt");
			tiprenda1.style("font-weight", "bold");
		
			img1_1 = createImg("https://static.zara.net/photos///2017/V/0/1/p/1198/026/084/3/w/1024/1198026084_6_1_1.jpg?ts=1495817172871");
			img1_2 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0858/044/061/2/w/1024/0858044061_6_1_1.jpg?ts=1493218541959");
			img1_3 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0264/078/031/2/w/1024/0264078031_6_1_1.jpg?ts=1495191460846");
			img1_4 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0264/078/330/2/w/1024/0264078330_6_1_1.jpg?ts=1495626488463");
			img1_5 = createImg("https://static.zara.net/photos///2017/V/0/1/p/1501/094/064/2/w/1024/1501094064_6_1_1.jpg?ts=1495626775757");
			img1_6 = createImg("https://static.zara.net/photos///2017/V/0/1/p/3253/006/400/2/w/1024/3253006400_6_1_1.jpg?ts=1495627074565");
			
			img1_1.position(350, 140);
			img1_1.size(130, 130);
			img1_2.position(550, 140);
			img1_2.size(130, 130);
			img1_3.position(750, 140);
			img1_3.size(130, 130);
			img1_4.position(750, 340);
			img1_4.size(130, 130);
			img1_5.position(550, 340);
			img1_5.size(130, 130);
			img1_6.position(350, 340);
			img1_6.size(130, 130);
		}
		if(tipoprenda == 2) { //Pantalones
			var tiprenda2 = createP("PANTALONES");
			tiprenda2.position(530, 38);
			tiprenda2.style("font-family", "Helvetica");
			tiprenda2.style("color", "#FFFFFF");
			tiprenda2.style("font-size", "20pt");
			tiprenda2.style("font-weight", "bold");
	
			img2_1 = createImg("https://static.zara.net/photos///2017/I/0/1/p/7707/311/804/2/w/1024/7707311804_6_1_1.jpg?ts=1496251824587");
			img2_2 = createImg("https://static.zara.net/photos///2017/V/0/1/p/7901/140/401/2/w/1024/7901140401_6_1_1.jpg?ts=1494435115815");
			img2_3 = createImg("https://static.zara.net/photos///2017/V/0/1/p/2603/508/050/2/w/1024/2603508050_6_1_1.jpg?ts=1493303223146");
			img2_4 = createImg("https://static.zara.net/photos///2017/V/0/1/p/1131/084/600/2/w/1024/1131084600_6_1_1.jpg?ts=1491388691568");
			img2_5 = createImg("https://static.zara.net/photos///2017/V/0/1/p/2117/169/401/2/w/1024/2117169401_6_1_1.jpg?ts=1486118488965");
			img2_6 = createImg("https://static.zara.net/photos///2017/V/0/1/p/7385/060/620/2/w/1024/7385060620_6_1_1.jpg?ts=1486121419643");
			
			img2_1.position(350, 140);
			img2_1.size(130, 130);
			img2_2.position(550, 140);
			img2_2.size(130, 130);
			img2_3.position(750, 140);
			img2_3.size(130, 130);
			img2_4.position(750, 340);
			img2_4.size(130, 130);
			img2_5.position(550, 340);
			img2_5.size(130, 130);
			img2_6.position(350, 340);
			img2_6.size(130, 130);
		}
		
		if(tipoprenda == 3) { //Abrigos
			var tiprenda3 = createP("ABRIGOS");
			tiprenda3.position(550, 38);
			tiprenda3.style("font-family", "Helvetica");
			tiprenda3.style("color", "#FFFFFF");
			tiprenda3.style("font-size", "20pt");
			tiprenda3.style("font-weight", "bold");
	
			img3_1 = createImg("https://static.zara.net/photos///2017/V/0/1/p/2484/778/300/2/w/1024/2484778300_6_1_1.jpg?ts=1494592115861");
			img3_2 = createImg("https://static.zara.net/photos///2017/V/0/1/p/2008/998/644/2/w/1024/2008998644_6_1_1.jpg?ts=1494591862034");
			img3_3 = createImg("https://static.zara.net/photos///2017/V/0/1/p/6895/066/505/2/w/1024/6895066505_6_1_1.jpg?ts=1493302776629");
			img3_4 = createImg("https://static.zara.net/photos///2017/V/0/1/p/3046/035/777/2/w/1024/3046035777_6_1_1.jpg?ts=1489768734386");
			img3_5 = createImg("https://static.zara.net/photos///2017/V/0/1/p/5854/026/505/2/w/1024/5854026505_6_1_1.jpg?ts=1489401143594");
			img3_6 = createImg("https://static.zara.net/photos///2017/V/0/1/p/3046/045/500/3/w/1024/3046045500_6_1_1.jpg?ts=1492531023028");
			
			img3_1.position(350, 140);
			img3_1.size(130, 130);
			img3_2.position(550, 140);
			img3_2.size(130, 130);
			img3_3.position(750, 140);
			img3_3.size(130, 130);
			img3_4.position(750, 340);
			img3_4.size(130, 130);
			img3_5.position(550, 340);
			img3_5.size(130, 130);
			img3_6.position(350, 340);
			img3_6.size(130, 130);
		}
		
		if(tipoprenda == 4) { //Sudaderas
			var tiprenda4 = createP("SUDADERAS");
			tiprenda4.position(550, 38);
			tiprenda4.style("font-family", "Helvetica");
			tiprenda4.style("color", "#FFFFFF");
			tiprenda4.style("font-size", "20pt");
			tiprenda4.style("font-weight", "bold");
		
			img4_1 = createImg("https://static.zara.net/photos///2017/V/0/1/p/1501/099/615/3/w/1024/1501099615_6_1_1.jpg?ts=1494836685829");
			img4_2 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0085/071/800/2/w/1024/0085071800_6_1_1.jpg?ts=1486117026903");
			img4_3 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0264/089/439/2/w/1024/0264089439_6_1_1.jpg?ts=1488379880401");
			img4_4 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0909/095/630/2/w/1024/0909095630_6_1_1.jpg?ts=1487343599526");						
			img4_5 = createImg("https://static.zara.net/photos///2017/V/0/1/p/1501/087/439/2/w/1024/1501087439_6_1_1.jpg?ts=1486750928786");
			img4_6 = createImg("https://static.zara.net/photos///2017/V/0/1/p/5643/086/250/2/w/1024/5643086250_6_1_1.jpg?ts=1487254582730");
	
			img4_1.position(350, 140);
			img4_1.size(130, 130);
			img4_2.position(550, 140);
			img4_2.size(130, 130);
			img4_3.position(750, 140);
			img4_3.size(130, 130);
			img4_4.position(750, 340);
			img4_4.size(130, 130);
			img4_5.position(550, 340);
			img4_5.size(130, 130);
			img4_6.position(350, 340);
			img4_6.size(130, 130);
		}
		
		if(tipoprenda == 5) { //Camisas
			var tiprenda5 = createP("CAMISAS");
			tiprenda5.position(550, 38);
			tiprenda5.style("font-family", "Helvetica");
			tiprenda5.style("color", "#FFFFFF");
			tiprenda5.style("font-size", "20pt");
			tiprenda5.style("font-weight", "bold");
		
			img5_1 = createImg("https://static.zara.net/photos///2017/V/0/1/p/2735/512/401/2/w/1024/2735512401_6_1_1.jpg?ts=1495704898241");
			img5_2 = createImg("https://static.zara.net/photos///2017/V/0/1/p/2737/494/300/2/w/1024/2737494300_6_1_1.jpg?ts=1495804822734");
			img5_3 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0881/070/250/2/w/1024/0881070250_6_1_1.jpg?ts=1494331297134");
			img5_4 = createImg("https://static.zara.net/photos///2017/I/0/1/p/2600/404/403/2/w/1024/2600404403_6_1_1.jpg?ts=1496389623167");
			img5_5 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0881/071/050/2/w/1024/0881071050_6_1_1.jpg?ts=1494331358379");
			img5_6 = createImg("https://static.zara.net/photos///2017/V/0/1/p/0881/045/400/2/w/1024/0881045400_6_1_1.jpg?ts=1493369537496");
			
			img5_1.position(350, 140);
			img5_1.size(130, 130);
			img5_2.position(550, 140);
			img5_2.size(130, 130);
			img5_3.position(750, 140);
			img5_3.size(130, 130);
			img5_4.position(750, 340);
			img5_4.size(130, 130);
			img5_5.position(550, 340);
			img5_5.size(130, 130);
			img5_6.position(350, 340);
			img5_6.size(130, 130);
		}
		
		if(tipoprenda == 6) { //Faldas
			var tiprenda6 = createP("FALDAS");
			tiprenda6.position(550, 38);
			tiprenda6.style("font-family", "Helvetica");
			tiprenda6.style("color", "#FFFFFF");
			tiprenda6.style("font-size", "20pt");
			tiprenda6.style("font-weight", "bold");
		
			img6_1 = createImg("https://static.zara.net/photos///2017/I/0/1/p/0327/201/400/2/w/1024/0327201400_6_1_1.jpg?ts=1496265642689");
			img6_2 = createImg("https://static.zara.net/photos///2017/V/0/1/p/2448/472/500/3/w/1024/2448472500_6_1_1.jpg?ts=1490255887964");
			img6_3 = createImg("https://static.zara.net/photos///2017/V/0/1/p/2521/198/630/2/w/1024/2521198630_6_1_1.jpg?ts=1490177045678");
			img6_4 = createImg("https://static.zara.net/photos///2017/V/0/1/p/5252/001/400/2/w/1024/5252001400_6_1_1.jpg?ts=1495726856126");
			img6_5 = createImg("https://static.zara.net/photos///2017/V/0/1/p/4387/362/626/2/w/1024/4387362626_6_1_1.jpg?ts=1487321638306");
			img6_6 = createImg("https://static.zara.net/photos///2017/V/0/1/p/8342/053/600/2/w/1024/8342053600_6_1_1.jpg?ts=1486407216586");

			img6_1.position(350, 140);
			img6_1.size(130, 130);
			img6_2.position(550, 140);
			img6_2.size(130, 130);
			img6_3.position(750, 140);
			img6_3.size(130, 130);
			img6_4.position(750, 340);
			img6_4.size(130, 130);
			img6_5.position(550, 340);
			img6_5.size(130, 130);
			img6_6.position(350, 340);
			img6_6.size(130, 130);
		}
		
		precio1 = createP('Precio: ___EUR');
		precio1.position(350, 260);
		precio1.style("font-family", "Helvetica");
		precio1.style("color", "#FFFFFF");
		precio1.style("font-size", "14pt");
			
		precio2 = createP('Precio: ___EUR');
		precio2.position(550, 260);
		precio2.style("font-family", "Helvetica");
		precio2.style("color", "#FFFFFF");
		precio2.style("font-size", "14pt");
			
		precio3 = createP('Precio: ___EUR');
		precio3.position(750, 260);
		precio3.style("font-family", "Helvetica");
		precio3.style("color", "#FFFFFF");
		precio3.style("font-size", "14pt");
		
		precio4 = createP('Precio: ___EUR');
		precio4.position(350, 460);
		precio4.style("font-family", "Helvetica");
		precio4.style("color", "#FFFFFF");
		precio4.style("font-size", "14pt");
			
		precio5 = createP('Precio: ___EUR');
		precio5.position(550, 460);
		precio5.style("font-family", "Helvetica");
		precio5.style("color", "#FFFFFF");
		precio5.style("font-size", "14pt");
			
		precio6 = createP('Precio: ___EUR');
		precio6.position(750, 460);
		precio6.style("font-family", "Helvetica");
		precio6.style("color", "#FFFFFF");
		precio6.style("font-size", "14pt");
		
		//contador = 5;
	}
}

// Cuando usa el click del ratón
function mouseClicked() {	
	// Comprueba si hace click en la figura de la mano
	var d = dist(mouseX, mouseY, 375, 281);
	if (d < 70 && inicio==1) {

			//Si ha hecho click una vez
			opacity=0;
			contador=2;	
			incio=0;

			text_eligetienda = createP('Que tienda quieres ver?');
			text_eligetienda.position(500, 80);
			text_eligetienda.style("font-family", "Helvetica");
			text_eligetienda.style("color", "#FFFFFF");
			text_eligetienda.style("font-size", "14pt");
			
			input = createInput();
			input.position(500, 150);
			button = createButton('Ver');
			button.position(input.x + input.width, 150);
			button.mousePressed(vertienda);
			
			text_ayuda1 = createP("Ayuda!");
			text_ayuda1.position(500, 320);
			text_ayuda1.style("color", "#FFFF00");
			text_ayuda1.style("font-size", "18pt");
			text_ayuda1.style("font-family", "Helvetica");
			text_ayuda1.style("font-weight", "bold");
			
			text_ayuda2 = createP("Puedes decir en voz alta Ver<br>seguido del nombre de la tienda<br>Ejemplo: Ver Stradivarius.");
			text_ayuda2.position(500, 360);
			text_ayuda2.style("color", "#FFFFFF");
			text_ayuda2.style("font-size", "12pt");
			text_ayuda2.style("font-family", "Helvetica");			
	}
	

	//PULSA FLECHA ATRÁS
	var d4 = dist(mouseX, mouseY, 78, 54); 
	if(d4<40 && contador == 3) {
		contador=2;
		var pedo2 = createP("antes valia 3, ahora valgo 2");
	}
	if(d4<40 && contador == 4) {
		var pedo2 = createP("antes valia 4, ahora valgo 3");
		contador=3;
		flag=1;
	}
	
	// Pulsa en CAMISETAS
	var d3 = dist(mouseX, mouseY, 150, 220); 
	if((contador == 3 && d3<90) || (contador == 4 && d3<90)) {
		if(contador==4) {
			visualizarmeConLaPrenda();
		}
		else{
			contador = 4;
			tipoprenda = 1;
		}
	}
	
	// Pulsa en PANTALONES
	var d3 = dist(mouseX, mouseY, 364, 218); 
	if((contador == 3 && d3<90) || (contador == 4 && d3<90)) {
		if(contador==4) {
			visualizarmeConLaPrenda();
		}
		else{
			contador = 4;
			tipoprenda = 2;
		}
	}
	
	// Pulsa en ABRIGOS
	var d3 = dist(mouseX, mouseY, 564, 218); 
	if((contador == 3 && d3<90) || (contador == 4 && d3<90)) {
		if(contador==4) {
			visualizarmeConLaPrenda();
		}
		else{
			contador = 4;
			tipoprenda = 3;
		}
	}
	
	// Pulsa en SUDADERAS
	var d3 = dist(mouseX, mouseY, 162, 412); 
	if((contador == 3 && d3<90) || (contador == 4 && d3<90)) {
		if(contador==4) {
			visualizarmeConLaPrenda();
		}
		else{
			contador = 4;
			tipoprenda = 4;
		}
	}
	
	// Pulsa en CAMISAS
	var d3 = dist(mouseX, mouseY, 364, 414); 
	if((contador == 3 && d3<90) || (contador == 4 && d3<90)) {
		if(contador==4) {
			visualizarmeConLaPrenda();
		}
		else{
			contador = 4;
			tipoprenda = 5;
		}
	}
	
	// Pulsa en FALDAS
	var d3 = dist(mouseX, mouseY, 562, 418); 
	if((contador == 3 && d3<90) || (contador == 4 && d3<90)) {
		if(contador==4) {
			visualizarmeConLaPrenda();
		}
		else{
			contador = 4;
			tipoprenda = 6;
		}
	}
}

function vertienda() {
	inicio=0;
	nametienda = input.value();
	nametienda = createP(nametienda);
	nametienda.position(550, 15);
	nametienda.style("font-family", "Helvetica");
	nametienda.style("color", "#FFFFFF");
	nametienda.style("font-size", "20pt");
	nametienda.style("font-weight", "bold");
	
	input.hide();
	button.hide();
	text_eligetienda.hide();
	text_ayuda1.hide();
	text_ayuda2.hide();
	
	camisetas = createP('Camisetas');
	camisetas.position(370, 260);
	camisetas.style("font-family", "Helvetica");
	camisetas.style("color", "#FFFFFF");
	camisetas.style("font-size", "14pt");
	
	pantalones = createP('Pantalones');
	pantalones.position(570, 260);
	pantalones.style("font-family", "Helvetica");
	pantalones.style("color", "#FFFFFF");
	pantalones.style("font-size", "14pt");
	
	abrigos = createP('Abrigos');
	abrigos.position(780, 260);
	abrigos.style("font-family", "Helvetica");
	abrigos.style("color", "#FFFFFF");
	abrigos.style("font-size", "14pt");
	
	sudaderas = createP('Sudaderas');
	sudaderas.position(370, 460);
	sudaderas.style("font-family", "Helvetica");
	sudaderas.style("color", "#FFFFFF");
	sudaderas.style("font-size", "14pt");
	
	camisas = createP('Camisas');
	camisas.position(580, 460);
	camisas.style("font-family", "Helvetica");
	camisas.style("color", "#FFFFFF");
	camisas.style("font-size", "14pt");
	
	faldas = createP('Faldas');
	faldas.position(780, 460);
	faldas.style("font-family", "Helvetica");
	faldas.style("color", "#FFFFFF");
	faldas.style("font-size", "14pt");
	
	contador = 3;
}

function visualizarmeConLaPrenda() {
	var visu=createP("ya");
}