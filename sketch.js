var capture;
var r,g,b, opacity;
var contador=0, preguntatienda=1;
var input, button;
var text_eligetienda, text_ayuda1, text_ayuda2;
var canvas;
var inicio = 1;
var img;

function setup() {
	canvas = createCanvas(750, 563);
	canvas.position(250,0);
	
	//capture.size(750, 563);
	 
	// Pick colors randomly
	r = 63;
	g = 158;
	b = 242;
	opacity = 127;
 
}

function draw() {
	background(255, 255, 153);
	capture = createCapture(VIDEO);
	image(capture, 0, 0, 750, 563);
  
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
	if (contador == 2) {
		inicio=0;
		strokeWeight(2);
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(-150, -200, 300, 120); 
		rect(-150, 50, 300, 120);
	}
	if (contador == 3) {
		inicio=0;
		strokeWeight(2);
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(-250, -250, 500, 50); 
		
		strokeWeight(2);
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(-300, -150, 180, 180); 
		img = createImg("http://www.dibujalia.com/data/media/39/ropa-017.jpg");
		img.position(350, 140);
		img.size(130, 130);
				
		rect(-100, -150, 180, 180); 
		img = createImg("http://4.bp.blogspot.com/-EYi0eyExoSU/U-DYDk7jBOI/AAAAAAABfhI/3R9jZnokVWs/s1600/Pantalon+(16).jpg");
		img.position(550, 140);
		img.size(130, 130);
		
		rect(100, -150, 180, 180);
		img = createImg("http://1.bp.blogspot.com/-mGh2XO3dfWg/U-C7Zp-RAnI/AAAAAAABe9E/_y7g1BSE8qY/s1600/Abrigo.gif");
		img.position(750, 140);
		img.size(130, 130);
		
		rect(-300, 50, 180, 180);
		img = createImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oLJwAJ5UY-FIAuMPaXa1exrEtqJTsLmXJDlNaHz0Od5jpXF0");
		img.position(750, 340);
		img.size(130, 130);
		
		
		rect(-100, 50, 180, 180);
		img = createImg("http://4.bp.blogspot.com/-2qwjCfy7PAs/U-DIuOYBgKI/AAAAAAABfNI/apeV_WB37GA/s1600/Camisa+(17).jpg");
		img.position(550, 340);
		img.size(130, 130);
		
		rect(100, 50, 180, 180);	
		img = createImg("https://st.depositphotos.com/1000419/3871/v/950/depositphotos_38717719-stock-illustration-abstract-sweatshirt-sketch-for-your.jpg");
		img.position(350, 340);
		img.size(130, 130);
		
	}
}

// Cuando usa el click del ratón
function mousePressed() {	
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
	
	var d2 = dist(mouseX, mouseY, width, height);
	if(contador == 3) {
		var pedo = createP(d2);
		text_ayuda2.position(500, 360);
			text_ayuda2.style("color", "#FFFFFF");
			text_ayuda2.style("font-size", "12pt");
			text_ayuda2.style("font-family", "Helvetica");	
	}
}

function vertienda() {
	inicio=0;
	var nametienda = input.value();
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
	
	var camisetas = createP('Camisetas');
	camisetas.position(370, 260);
	camisetas.style("font-family", "Helvetica");
	camisetas.style("color", "#FFFFFF");
	camisetas.style("font-size", "14pt");
	
	var pantalones = createP('Pantalones');
	pantalones.position(570, 260);
	pantalones.style("font-family", "Helvetica");
	pantalones.style("color", "#FFFFFF");
	pantalones.style("font-size", "14pt");
	
	var abrigos = createP('Abrigos');
	abrigos.position(780, 260);
	abrigos.style("font-family", "Helvetica");
	abrigos.style("color", "#FFFFFF");
	abrigos.style("font-size", "14pt");
		
	var sudaderas = createP('Sudaderas');
	sudaderas.position(370, 460);
	sudaderas.style("font-family", "Helvetica");
	sudaderas.style("color", "#FFFFFF");
	sudaderas.style("font-size", "14pt");
	
	var camisas = createP('Camisas');
	camisas.position(580, 460);
	camisas.style("font-family", "Helvetica");
	camisas.style("color", "#FFFFFF");
	camisas.style("font-size", "14pt");
	
	var faldas = createP('Faldas');
	faldas.position(780, 460);
	faldas.style("font-family", "Helvetica");
	faldas.style("color", "#FFFFFF");
	faldas.style("font-size", "14pt");
	
	contador = 3;
}
