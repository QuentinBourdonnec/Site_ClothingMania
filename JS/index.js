"use strict";
var p ;
var nbMax = 9;
function Boucle(num){
	if(num > nbMax){
		num = 1;
	}
	return num.toString();
}

function Switch(numId){
	while(document.getElementById("Des_" + numId.toString()).hasChildNodes()){
		document.getElementById("Des_" + numId.toString()).removeChild(document.getElementById("Des_" + numId.toString()).childNodes[0]);
	}
	
	var Src = document.getElementById("Img-"+numId).src;
	var Lsrc = Src.split("/");
	var Br = document.createElement("br");
	var text1 = document.createTextNode(Lsrc[Lsrc.length-2] + " n°" + Src.split("_")[1].split(".")[0]);
	var text2 = document.createTextNode("Prix: " + (Math.floor((Math.random()*110)+10)).toString() + "€");
	document.getElementById("Des_" + numId.toString()).appendChild(text1);
	document.getElementById("Des_" + numId.toString()).appendChild(Br);
	document.getElementById("Des_" + numId.toString()).appendChild(text2);
	document.getElementById("Img-"+numId).src = Src.split("_")[0] + "_" + Boucle((Math.floor(Src.split("_")[1].split(".")[0]))+1).toString() + ".jpg";
}

function TypeVetement(path){
	if(document.getElementById("sexe").selectedIndex !== 0){
		document.getElementById("sexe").style.border = "none";
	  while(document.getElementById("Produit").hasChildNodes()){
		  document.getElementById("Produit").removeChild(document.getElementById("Produit").childNodes[0]);
	  }
	  var i;
	  var Img;
	  var sexe;
	  if(document.getElementById("sexe").selectedIndex === 1){
		  sexe = "Homme/";
	  }
	  else{
		  sexe = "Femme/";
	  }
	  for(i=1; i<nbMax;i++){
		  Img = document.createElement("img");
		  Img.src = "Images/Vetement/" + sexe + path + i.toString() + ".jpg";
		  Img.id = "Img-" + (i+9).toString();
		  Img.class = "ImageProduit";
		  document.getElementById("Produit").appendChild(Img);
	  }
	  document.getElementById("Produit").style.display = "block";
	  document.getElementById("Acceuil").style.display = "none";
	  clearInterval(p);
	}
	else{
		document.getElementById("sexe").style.border = "groove";
		document.getElementById("sexe").style.borderWidth = '2px';
		document.getElementById("sexe").style.borderColor = 'red';
	}
}

function Sauto(){
	var i;
	for(i = 0; i<6; i++){
		Switch((i+1).toString());
	}
}