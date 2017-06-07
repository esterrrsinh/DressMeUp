var capture;
var primeravez = 1;
var menu=0;
var imgmano;
var text_eligetienda, input, button1, text_ayuda1, text_ayuda2;
var r, g, b;
var texto_abrigos, texto_camisas, texto_camisetas, texto_faldas, texto_pantalones, texto_sudaderas;
var img0_1, img0_2, img0_3, img0_4, img0_5, img0_6;
var img_flecha;
var nametienda, nametiendaP, nametiendaP1;
var precio1, precio2, precio3, precio4, precio5, precio6
var tiprenda1, img1_1, img1_2, img1_3, img1_4, img1_5, img1_6;
var tiprenda2, img2_1, img2_2, img2_3, img2_4, img2_5, img2_6;
var tiprenda3, img3_1, img3_2, img3_3, img3_4, img3_5, img3_6;
var tiprenda4, img4_1, img4_2, img4_3, img4_4, img4_5, img4_6;
var tiprenda5, img5_1, img5_2, img5_3, img5_4, img5_5, img5_6;
var tiprenda6, img6_1, img6_2, img6_3, img6_4, img6_5, img6_6;
var tip;
var verprenda=0;
var s,m,l,descripcion,carrito;
function setup() {
	canvas = createCanvas(750, 563);
	canvas.position(250,0);
	capture = createCapture(VIDEO);
	
	r = 63;
	g = 158;
	b = 242;
	
	if(primeravez == 1) {
		menu0();
	}
}

function draw() {
	background(255, 255, 153);	
	image(capture, 0, 0, 750, 563);
	
	if(menu == 1) {
		//strokeWeight(2);
		//stroke(r, g, b);
		//fill(r, g, b, 127);
		//rect(200, -200, 300, 120); 
		//rect(-50, 50, 300, 120);
	}
	if (menu == 2) {
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(100, 30, 530, 50); 
	}
	
	if (menu == 3) {
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(100, 15, 530, 50); 
		rect(100, 80, 530, 30); 
	}
	
	if (menu == 4) {
		stroke(r, g, b);
		fill(r, g, b, 127);
		rect(575, 30, 40, 40); 
		rect(630, 30, 40, 40); 
		rect(685, 30, 40, 40);
		rect(575, 90, 150, 300);
		rect(575, 420, 150, 50);		
	}
}


function mouseClicked() {	
	if(menu == 0) {
		var d = dist(mouseX, mouseY, 375, 281);
		if (d < 70) {
			menu1();
		}
	}
	if(menu == 1) {
		img_flecha.hide();
	}
	if(menu == 2){
		var d = dist(mouseX, mouseY, 78, 54); 
		if(d<40) {
			menu1();
			img_flecha.hide();
			img0_1.hide();
			img0_2.hide();
			img0_3.hide();
			img0_4.hide();
			img0_5.hide();
			img0_6.hide();
			texto_camisas.hide();
			texto_camisetas.hide();
			texto_pantalones.hide();
			texto_faldas.hide();
			texto_sudaderas.hide();
			texto_abrigos.hide();
			nametiendaP.hide();
		}
		
		
		var d3 = dist(mouseX, mouseY, 150, 220); // Pulsa en CAMISETAS
		if(d3<90) {
			tip=1;
			menu3(1);
		}
		var d4 = dist(mouseX, mouseY, 364, 218); // Pulsa en PANTALONES
		if(d4<90) {
			tip=2;
			menu3(2);
		}		
		var d5 = dist(mouseX, mouseY, 564, 218); // Pulsa en ABRIGOS
		if(d5<90) {
			tip=3;
			menu3(3);
		}
		var d6 = dist(mouseX, mouseY, 162, 412); // Pulsa en SUDADERAS
		if(d6<90) {
			tip=4;
			menu3(4);
		}
		var d7 = dist(mouseX, mouseY, 364, 414); // Pulsa en CAMISAS
		if(d7<90) {
			tip=5;
			menu3(5);
		}
		var d8 = dist(mouseX, mouseY, 562, 418); // Pulsa en FALDAS
		if(d8<90) {
			tip=6;
			menu3(6);
		}
		
	}
	
	if(menu == 3) {
		var d = dist(mouseX, mouseY, 78, 54); 
		if(d<40) { //Si pulsa atrás
			nametiendaP1.hide();
			precio1.hide();
			precio2.hide();
			precio3.hide();
			precio4.hide();
			precio5.hide();
			precio6.hide();
			img_flecha.hide();
			
			if(tip == 1) {
			tiprenda1.hide();
			img1_1.hide();
			img1_2.hide();
			img1_3.hide();
			img1_4.hide();
			img1_5.hide();
			img1_6.hide();
			}
			
			if(tip==2){
			tiprenda2.hide();
			img2_1.hide();
			img2_2.hide();
			img2_3.hide();
			img2_4.hide();
			img2_5.hide();
			img2_6.hide();
			}
			
			if(tip==3){
			tiprenda3.hide();
			img3_1.hide();
			img3_2.hide();
			img3_3.hide();
			img3_4.hide();
			img3_5.hide();
			img3_6.hide();
			}
			
			if(tip==4){
			tiprenda4.hide();
			img4_1.hide();
			img4_2.hide();
			img4_3.hide();
			img4_4.hide();
			img4_5.hide();
			img4_6.hide();
			}
			
			if(tip==5){
			tiprenda5.hide();
			img5_1.hide();
			img5_2.hide();
			img5_3.hide();
			img5_4.hide();
			img5_5.hide();
			img5_6.hide();
			}
			
			if(tip==6) {
			tiprenda6.hide();
			img6_1.hide();
			img6_2.hide();
			img6_3.hide();
			img6_4.hide();
			img6_5.hide();
			img6_6.hide();
			}
			menu2();
		}
		var d10 = dist(mouseX, mouseY, 150, 220); 
		var d11 = dist(mouseX, mouseY, 364, 218); 
		var d12 = dist(mouseX, mouseY, 564, 218); 
		var d13 = dist(mouseX, mouseY, 162, 412); 
		var d14 = dist(mouseX, mouseY, 364, 414); 
		var d15 = dist(mouseX, mouseY, 562, 418); 
		if((d10<90) || (d11<90) || (d12<90) || (d13<90) || (d14<90) || (d15<90)) {
			
			if(verprenda==1) {
				var p=createP("1");
				verprenda=0;
			}
			else {
				var p=createP("0");
				menu4();
			}
		}
		
	}
	if(menu == 4) {
		var d = dist(mouseX, mouseY, 78, 54); 
		if(d<40) { //Si pulsa atrás
			menu3(tip);
			s.hide();
			m.hide();
			l.hide();
			carrito.hide();
			descripcion.hide();
		}
	}
}

function menu0() {
	imgmano = createImg("http://icon-icons.com/icons2/817/PNG/512/thefreeforty_hand_icon-icons.com_66340.png");
	imgmano.position(560, 220);
	imgmano.size(100,100);
	primeravez=0;
	menu=0;
}

function menu1() {
	menu=1;
	imgmano.hide();
	
	text_eligetienda = createP('Que tienda quieres ver?');
	text_eligetienda.style("font-family", "Helvetica");
	text_eligetienda.style("color", "#FFFFFF");
	text_eligetienda.style("font-size", "14pt");
	text_eligetienda.position(500, 80);
	
	text_ayuda1 = createP('Ayuda!');
	text_ayuda1.style("color", "#FFFF00");
	text_ayuda1.style("font-size", "18pt");
	text_ayuda1.style("font-family", "Helvetica");
	text_ayuda1.style("font-weight", "bold");
	text_ayuda1.position(500, 320);

	text_ayuda2 = createP('Puedes decir en voz alta Ver<br>seguido del nombre de la tienda<br>Ejemplo: Ver Stradivarius.');
	text_ayuda2.style("color", "#FFFFFF");
	text_ayuda2.style("font-size", "12pt");
	text_ayuda2.style("font-family", "Helvetica");	
	text_ayuda2.position(500, 360);
	
	input = createInput();
	input.position(500, 150);
	
	button1 = createButton('Ver');
	button1.position(input.x + input.width, 150);
	button1.mousePressed(menu2);
}

function menu2() {
	menu=2;
	imgmano.hide();
	text_eligetienda.hide();
	text_ayuda1.hide();
	text_ayuda2.hide();
	input.hide();
	button1.hide();
	
	nametienda = input.value();
	nametiendaP = createP(nametienda);
	nametiendaP.position(550, 15);
	nametiendaP.style("font-family", "Helvetica");
	nametiendaP.style("color", "#FFFFFF");
	nametiendaP.style("font-size", "20pt");
	nametiendaP.style("font-weight", "bold");
	
	img0_1 = createImg("http://www.dibujalia.com/data/media/39/ropa-017.jpg");
	img0_2 = createImg("http://4.bp.blogspot.com/-EYi0eyExoSU/U-DYDk7jBOI/AAAAAAABfhI/3R9jZnokVWs/s1600/Pantalon+(16).jpg");
	img0_3 = createImg("http://1.bp.blogspot.com/-mGh2XO3dfWg/U-C7Zp-RAnI/AAAAAAABe9E/_y7g1BSE8qY/s1600/Abrigo.gif");
	img0_4 = createImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oLJwAJ5UY-FIAuMPaXa1exrEtqJTsLmXJDlNaHz0Od5jpXF0");
	img0_5 = createImg("http://4.bp.blogspot.com/-2qwjCfy7PAs/U-DIuOYBgKI/AAAAAAABfNI/apeV_WB37GA/s1600/Camisa+(17).jpg");
	img0_6 = createImg("https://st.depositphotos.com/1000419/3871/v/950/depositphotos_38717719-stock-illustration-abstract-sweatshirt-sketch-for-your.jpg");
	img0_1.position(350, 140); //Camisetas
	img0_1.size(130, 130);
	img0_2.position(550, 140); //Pantalones 
	img0_2.size(130, 130);
	img0_3.position(750, 140); //Abrigos
	img0_3.size(130, 130);
	img0_4.position(750, 340); //Sudaderas
	img0_4.size(130, 130);
	img0_5.position(550, 340); //Camisas
	img0_5.size(130, 130);
	img0_6.position(350, 340); //Faldas
	img0_6.size(130, 130);
		
	//Flecha
	img_flecha = createImg("http://icon-icons.com/icons2/72/PNG/256/back_arrow_14447.png");
	img_flecha.position(280, 30);
	img_flecha.size(50, 50);
	
	//Texto debajo de la imagen
	texto_camisetas = createP('Camisetas');
	texto_camisetas.position(370, 260);
	texto_camisetas.style("font-family", "Helvetica");
	texto_camisetas.style("color", "#FFFFFF");
	texto_camisetas.style("font-size", "14pt");
	texto_pantalones = createP('Pantalones');
	texto_pantalones.position(570, 260);
	texto_pantalones.style("font-family", "Helvetica");
	texto_pantalones.style("color", "#FFFFFF");
	texto_pantalones.style("font-size", "14pt");
	texto_abrigos = createP('Abrigos');
	texto_abrigos.position(780, 260);
	texto_abrigos.style("font-family", "Helvetica");
	texto_abrigos.style("color", "#FFFFFF");
	texto_abrigos.style("font-size", "14pt");
	texto_sudaderas = createP('Sudaderas');
	texto_sudaderas.position(370, 460);
	texto_sudaderas.style("font-family", "Helvetica");
	texto_sudaderas.style("color", "#FFFFFF");
	texto_sudaderas.style("font-size", "14pt");
	texto_camisas = createP('Camisas');
	texto_camisas.position(580, 460);
	texto_camisas.style("font-family", "Helvetica");
	texto_camisas.style("color", "#FFFFFF");
	texto_camisas.style("font-size", "14pt");
	texto_faldas = createP('Faldas');
	texto_faldas.position(780, 460);
	texto_faldas.style("font-family", "Helvetica");
	texto_faldas.style("color", "#FFFFFF");
	texto_faldas.style("font-size", "14pt");
}

function menu3(numerotienda) {
	menu=3;
	
	imgmano.hide();
	text_eligetienda.hide();
	text_ayuda1.hide();
	text_ayuda2.hide();
	input.hide();
	button1.hide();
	nametiendaP.hide();
	img0_1.hide();
	img0_2.hide();
	img0_3.hide();
	img0_4.hide();
	img0_5.hide();
	img0_6.hide();
	texto_camisas.hide();
	texto_camisetas.hide();
	texto_abrigos.hide();
	texto_faldas.hide();
	texto_pantalones.hide();
	texto_sudaderas.hide();
	
	nametiendaP1 = createP(nametienda);
	nametiendaP1.position(550, 0);
	nametiendaP1.style("font-family", "Helvetica");
	nametiendaP1.style("color", "#FFFFFF");
	nametiendaP1.style("font-size", "20pt");
	nametiendaP1.style("font-weight", "bold");
	
	if (numerotienda == 1) {	
		tiprenda1 = createP("CAMISETAS");
		tiprenda1.position(550, 65);
		tiprenda1.style("font-family", "Helvetica");
		tiprenda1.style("color", "#FFFFFF");
		tiprenda1.style("font-size", "14pt");
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
	
	if (numerotienda == 2) {
		tiprenda2 = createP("PANTALONES");
		tiprenda2.position(550, 65);
		tiprenda2.style("font-family", "Helvetica");
		tiprenda2.style("color", "#FFFFFF");
		tiprenda2.style("font-size", "14pt");
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
	if (numerotienda == 3) {
		tiprenda3 = createP("ABRIGOS");
		tiprenda3.position(550, 65);
		tiprenda3.style("font-family", "Helvetica");
		tiprenda3.style("color", "#FFFFFF");
		tiprenda3.style("font-size", "14pt");
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
	if (numerotienda == 4) {
		tiprenda4 = createP("SUDADERAS");
		tiprenda4.position(550, 65);
		tiprenda4.style("font-family", "Helvetica");
		tiprenda4.style("color", "#FFFFFF");
		tiprenda4.style("font-size", "14pt");
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
	if (numerotienda == 5) {
		tiprenda5 = createP("CAMISAS");
		tiprenda5.position(550, 65);
		tiprenda5.style("font-family", "Helvetica");
		tiprenda5.style("color", "#FFFFFF");
		tiprenda5.style("font-size", "14pt");
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
	if (numerotienda == 6) {
		tiprenda6 = createP("FALDAS");
		tiprenda6.position(550, 65);
		tiprenda6.style("font-family", "Helvetica");
		tiprenda6.style("color", "#FFFFFF");
		tiprenda6.style("font-size", "14pt");
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
	//Texto con precios
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
	
	verprenda=1;
}

function menu4() {
	menu=4;
	imgmano.hide();
	text_eligetienda.hide();
	text_ayuda1.hide();
	text_ayuda2.hide();
	input.hide();
	button1.hide();
	nametiendaP.hide();
	img0_1.hide();
	img0_2.hide();
	img0_3.hide();
	img0_4.hide();
	img0_5.hide();
	img0_6.hide();
	texto_camisas.hide();
	texto_camisetas.hide();
	texto_abrigos.hide();
	texto_faldas.hide();
	texto_pantalones.hide();
	texto_sudaderas.hide();
	nametiendaP1.hide();
	
	if(tip == 1) {
		tiprenda1.hide();
		img1_1.hide();
		img1_2.hide();
		img1_3.hide();
		img1_4.hide();
		img1_5.hide();
		img1_6.hide();
	}
	if(tip == 2) {
		tiprenda2.hide();
		img2_1.hide();
		img2_2.hide();
		img2_3.hide();
		img2_4.hide();
		img2_5.hide();
		img2_6.hide();
	}
	if(tip == 3) {
		tiprenda3.hide();
		img3_1.hide();
		img3_2.hide();
		img3_3.hide();
		img3_4.hide();
		img3_5.hide();
		img3_6.hide();
	}
	if(tip == 4) {
		tiprenda4.hide();
		img4_1.hide();
		img4_2.hide();
		img4_3.hide();
		img4_4.hide();
		img4_5.hide();
		img4_6.hide();
	}
	if(tip == 5) {
		tiprenda5.hide();
		img5_1.hide();
		img5_2.hide();
		img5_3.hide();
		img5_4.hide();
		img5_5.hide();
		img5_6.hide();
	}
	if(tip == 6) {
		tiprenda6.hide();
		img6_1.hide();
		img6_2.hide();
		img6_3.hide();
		img6_4.hide();
		img6_5.hide();
		img6_6.hide();
	}
	precio1.hide();
	precio2.hide();
	precio3.hide();
	precio4.hide();
	precio5.hide();
	precio6.hide();
	
	//Texto
	s = createP('S');
	s.position(840, 22);
	s.style("font-family", "Helvetica");
	s.style("color", "#FFFFFF");
	s.style("font-size", "14pt");
	m = createP('M');
	m.position(892, 22);
	m.style("font-family", "Helvetica");
	m.style("color", "#FFFFFF");
	m.style("font-size", "14pt");
	l = createP('L');
	l.position(950, 22);
	l.style("font-family", "Helvetica");
	l.style("color", "#FFFFFF");
	l.style("font-size", "14pt");
	descripcion = createP('Descripcion<br>.....<br>.....<br>.....<br>.....<br><br>Modo de lavado<br>.....<br>.....<br>.....<br>......<br><br>Precio<br>........EUR');
	descripcion.position(840, 100);
	descripcion.style("font-family", "Helvetica");
	descripcion.style("color", "#FFFFFF");
	descripcion.style("font-size", "12pt");	
	carrito = createP('Comprar');
	carrito.position(855, 415);
	carrito.style("font-family", "Helvetica");
	carrito.style("color", "#FFFFFF");
	carrito.style("font-size", "14pt");		
	
}