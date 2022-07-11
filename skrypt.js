document.onkeydown = KeyPress;
function KeyPress(e) {
	var keycode;
	//przypisanie lokacji nacisnietego klawisza
	var x = e.location;
	//przypisanie kodu nacianietego klawiszu
	if (window.event){
		keycode = window.event.keyCode;
	}
	else if (e){
		keycode = e.which;
	}
	//alert("keycode: " + keycode + " location: "+ x);
	//stworzenie zmiennej id wedlug wczeeniej ustalonego pomyslu i zamienienie jej na zmienn� liczbow�
	var id = keycode +""+ x;
	//alert(id);
	var idint = parseInt(id);
	//sprawdzenie jaki j�zyk zosta� wybrany i przypisanie odpowiedniej warto�ci zmiennej potrzebnej do stworzenia lokalizacji sk�d b�d� brane grafiki
	var lang = document.getElementById("language").value;
	var wlang;
	if(lang == "International"){
		$wlang = "INT";
	}
	else if(lang == "French"){
		$wlang = "FR";
	}
	//podmienienie grafiki na grafike z innym kolorem tla oznaczajaca ze klawisz zostal nacisniety
	//klawisz enter na klawiaturze numpad podmienia grafike na te z entera zwyklego nalezlo dodac if-a ktory to naprawi
	if (keycode==13 && x == 3)
		document.getElementById(133).src="kbp/"+$wlang+"/133.png";
	else
	document.getElementById(idint).src="kbp/"+$wlang+"/"+ keycode +".png";
				
	//wylaczenie wszystkich klawiszy funkcyjnych ktore przeszkadzaly w dzialaniu programu 
	if(e.keyCode == 123) {
		return false;
	}
	else if(e.keyCode == 122) {
		return false;
	}
	else if(e.keyCode == 121) {
		return false;
	}
	else if(e.keyCode == 120) {
		return false;
	}
	else if(e.keyCode == 119) {
		return false;
	}
	else if(e.keyCode == 118) {
		return false;
	}
	else if(e.keyCode == 117) {
		return false;
	}
	else if(e.keyCode == 116) {
		return false;
	}
	else if(e.keyCode == 115) {
		return false;
	}
	else if(e.keyCode == 114) {
		return false;
	}
	else if(e.keyCode == 113) {
		return false;
	}
	else if(e.keyCode == 112) {
		return false;
	}
	else if(e.keyCode == 9) {
		return false;
	}
	else if(e.keyCode == 32) {
		return false;
	}
	else if(e.keyCode == 13) {
		return false;
	}
	else if(e.keyCode == 113) {
		return false;
	}
	else if(e.keyCode == 38) {
		return false;
	}
	else if(e.keyCode == 37) {
		return false;
	}
	else if(e.keyCode == 40) {
		return false;
	}
	else if(e.keyCode == 39) {
		return false;
	}
};
			
function change() {
	var lang = document.getElementById("language").value;
	var wlang
	//alert(lang);
	//uzycie odpowiednich tablic wybranego jezyka
	if(lang == "International"){
		//international
		$wlang = "INT";
		document.getElementById("lang").innerHTML = "Selected International";
		var tab1 = [
			[27,112,113,114,115,116,117,118,119,120,121,122,123],
			[270,1120,1130,1140,1150,1160,1170,1180,1190,1200,1210,1220,1230],
		];
		var tab2 = [
			[192,49,50,51,52,53,54,55,56,57,48,189,187,8,45,36,33,144,111,106,109],
			[1920,490,500,510,520,530,540,550,560,570,480,1890,1870,80,450,360,330,1440,1113,1063,1093],
		];
		var tab3 = [
			[9,81,87,69,82,84,89,85,73,79,80,219,221,220,46,35,34,103,104,105,107],
			[90,810,870,690,820,840,890,850,730,790,800,2190,2210,2200,460,350,340,1033,1043,1053,1073],
		];
		var tab4 = [
			[20,65,83,68,70,71,72,74,75,76,186,222,13,"e","e","e",100,101,102],
			[200,650,830,680,700,710,720,740,750,760,1860,2220,130,"e","e","e",1003,1013,1023],
		];
		var tab5 = [
			[16,90,88,67,86,66,78,77,188,190,191,16,"e",38,"e",97,98,99,133],
			[161,900,880,670,860,660,780,770,1880,1900,1910,162,"e",380,"e",973,983,993,133],
		];
		var tab6 = [
			[17,91,18,32,18,0,93,17,"e",37,40,39,96,110],
			[171,910,181,320,182,00,930,172,"e",370,400,390,963,1103],
		];
	}
	else if(lang == "French"){
		//french
		document.getElementById("lang").innerHTML = "Selected French";
		$wlang = "FR";
		var tab1 = [
			[27,112,113,114,115,116,117,118,119,120,121,122,123],
			[270,1120,1130,1140,1150,1160,1170,1180,1190,1200,1210,1220,1230],
		];
		var tab2 = [
			[222,49,50,51,52,53,54,55,56,57,48,219,187,8,45,36,33,144,111,106,109],
			[2220,490,500,510,520,530,540,550,560,570,480,2190,1870,80,450,360,330,1440,1113,1063,1093],
		];
		var tab3 = [
			[9,65,90,69,82,84,89,85,73,79,80,221,186,220,46,35,34,103,104,105,107],
			[90,650,900,690,820,840,890,850,730,790,800,2210,1860,2200,460,350,340,1033,1043,1053,1073],
		];
		var tab4 = [
			[20,81,83,68,70,71,72,74,75,76,77,192,13,"e","e","e",100,101,102],
			[200,810,830,680,700,710,720,740,750,760,770,1920,130,"e","e","e",1003,1013,1023],
		];
		var tab5 = [
			[16,87,88,67,86,66,78,188,190,191,223,16,"e",38,"e",97,98,99,133],
			[161,870,880,670,860,660,780,1880,1900,1910,2230,162,"e",380,"e",973,983,993,133],
		];
		var tab6 = [
			[17,91,18,32,18,0,93,17,"e",37,40,39,96,110],
			[171,910,181,320,182,00,930,172,"e",370,400,390,963,1103],
		];
	}
	//uzupelnienie tabeli odpowiednimi grafikami
	for($z = 1; $z < 7; $z++){
		var y;
						
		if ($z == 1){
			$y = 13;
			for ($i = 0; $i < $y; $i++){
				document.getElementById("kb"+$z+$i+"").innerHTML = "<td><img id="+tab1[1][$i]+" src=\"kb/"+$wlang+"/"+tab1[0][$i]+".png\"></td>";
			}
		}
		if ($z == 2){
			$y = 21;
			for ($i = 0; $i < $y; $i++){
				document.getElementById("kb"+$z+$i+"").innerHTML = "<td><img id="+tab2[1][$i]+" src=\"kb/"+$wlang+"/"+tab2[0][$i]+".png\"></td>";
			}
		}
		if ($z == 3){
			$y = 21;
			for ($i = 0; $i < $y; $i++){
				document.getElementById("kb"+$z+$i+"").innerHTML = "<td><img id="+tab3[1][$i]+" src=\"kb/"+$wlang+"/"+tab3[0][$i]+".png\"></td>";
			}
		}
		if ($z == 4){
			$y = 19;
			for ($i = 0; $i < $y; $i++){
				document.getElementById("kb"+$z+$i+"").innerHTML = "<td><img id="+tab4[1][$i]+" src=\"kb/"+$wlang+"/"+tab4[0][$i]+".png\"></td>";
			}
		}
		if ($z == 5){
			$y = 19;
			for ($i = 0; $i < $y; $i++){
				document.getElementById("kb"+$z+$i+"").innerHTML = "<td><img id="+tab5[1][$i]+" src=\"kb/"+$wlang+"/"+tab5[0][$i]+".png\"></td>";
			}
		}
		if ($z == 6){
			$y = 14;
			for ($i = 0; $i < $y; $i++){
				document.getElementById("kb"+$z+$i+"").innerHTML = "<td><img id="+tab6[1][$i]+" src=\"kb/"+$wlang+"/"+tab6[0][$i]+".png\"></td>";
			}
		}
	}
};
			