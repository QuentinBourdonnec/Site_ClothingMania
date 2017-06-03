function Verification()
{
	"use strict";
	var mail = document.getElementById("MAIL").value;
	if((mail !== '') && /@/.test(mail) && /.fr$|.com$/.test(mail)){
		document.getElementById("MAIL").style.borderColor = "green";
	}
	else{
		document.getElementById("MAIL").style.borderColor = "red";	
	}
	
	var noms = document.getElementById("Nom").value;
	if((noms !== "" && /[a-z]/.test(noms)) === false){
		document.getElementById("Nom").style.borderColor = "red";
	}
	else{
		document.getElementById("Nom").style.borderColor = "green";	
	}
	var prenoms = document.getElementById("Prenom").value;
	if((prenoms!== "" && /[a-z]/.test(prenoms)) === false){
		document.getElementById("Prenom").style.borderColor="red";
	}
	else{
		document.getElementById("Prenom").style.borderColor = "green";	
	}
	
	if(/[0-9]/.test(document.getElementById("PORTABLE").value) === false){
		document.getElementById("PORTABLE").style.borderColor = "red";
	}
	else{
		document.getElementById("PORTABLE").style.borderColor = "green";	
	}
	
	if(/[0-9]/.test(document.getElementById("FIXE").value) === false){
		document.getElementById("FIXE").style.borderColor = "red";
	}
	else			{
		document.getElementById("FIXE").style.borderColor = "green";	
	}
	
	if(/[a-z]/.test(document.getElementById("PAYS").value) === false){
		document.getElementById("PAYS").style.borderColor = "red";
	}
	else{
		document.getElementById("PAYS").style.borderColor = "green";
	}
	
	if(/[a-z]/.test(document.getElementById("VILLE").value) === false){
		document.getElementById("VILLE").style.borderColor = "red";
	}
	else{
		document.getElementById("VILLE").style.borderColor = "green";
	}
	
	var Code = /[0-9]/;
	if(Code.test(document.getElementById("POSTAL").value) === false){
		document.getElementById("POSTAL").style.borderColor = "red";
	}
	else{
		document.getElementById("POSTAL").style.borderColor = "green";
	}
	
	if(document.getElementById("NUMERO").selectedIndex === 0){
		document.getElementById("NUMERO").style.borderColor = "red";
	}
	else{
		document.getElementById("NUMERO").style.borderColor = "green";
	}
	
	if(document.getElementById("VOIE").selectedIndex === 0){
		document.getElementById("VOIE").style.borderColor = "red";
	}
	else{
		document.getElementById("VOIE").style.borderColor = "green";
	}
	
	if(document.getElementById("Titre").selectedIndex === 0){
		document.getElementById("Titre").style.borderColor = "red";
	}
	else{
		document.getElementById("Titre").style.borderColor = "green";
	}
	
	if(/[a-z]/.test(document.getElementById("RUE").value) === false){
		document.getElementById("RUE").style.borderColor = "red";
	}
	else{
		document.getElementById("RUE").style.borderColor = "green";
	}
	
	document.getElementById("VOIE").style.borderWidth = "2px";
	document.getElementById("NUMERO").style.borderWidth = "2px";
	document.getElementById("Titre").style.borderWidth = "2px";
	
	if(confirm('voulez vous etre rediriger vers la page dacceuil')===true){
	 document.location.href="../index.html";
	}
	
}