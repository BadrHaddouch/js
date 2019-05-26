function valider(){
	
	if(validerCours()){
		if(validerSession()){
			return true;
		}
	} 
	return false;
}

function validerPrenom(prenom){

	if (prenom.validity.valueMissing){ 	// prenom est vide?
		prenom.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (prenom.validity.patternMismatch){
		prenom.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerNom(nom){

	if (nom.validity.valueMissing){ 	// nom est vide?
		nom.setCustomValidity("Veuillez saisir votre nom.");
	} else if (nom.validity.patternMismatch){
		nom.setCustomValidity("Veuillez entrer seulement des lettres dans le nom.");
	}
}

function validerAdresse(adresse){
	
	var espace = adresse.value.indexOf(" ", 1);
	var no = adresse.value.substring(0,espace);
	var rue = adresse.value.substring(espace+1);

	var patternNo = /[^0-9]/;
	var patternRue = /[^A-Za-z]/;
	
	if (adresse.validity.valueMissing){ 	// adresse est vide?
		adresse.setCustomValidity("Veuillez saisir votre adresse.");
	} else if (patternNo.test(no)){ 
		adresse.setCustomValidity("Veuillez saisir un no civique seulement avec des chiffres."); 
	} else if (patternRue.test(rue)){
			adresse.setCustomValidity("Veuillez saisir un nom de rue seulement avec des lettres.");
	} else {
		adresse.setCustomValidity('');
	}
}

function validerCodePostal(codePostal){
	
	var patternChiffre = /[^0-9]/;
	var patternlettre = /[^A-Za-z]/;
	
	if (codePostal.validity.valueMissing){ 	// code postal est vide?
		codePostal.setCustomValidity("Veuillez saisir votre code postal.");
	} else if (codePostal.value.length != 6) { 
		codePostal.setCustomValidity("Veuillez entrer 6 caractères pour le code postal."); 
	} else if (patternlettre.test(codePostal.value.charAt(0))) { 
		codePostal.setCustomValidity("Premier caractère du code postal invalide, veuillez entrer une lettre."); 
	} else if (patternChiffre.test(codePostal.value.charAt(1))){ 
		codePostal.setCustomValidity("Deuxième caractère du code postal invalide, veuillez entrer un chiffre."); 
	} else if (patternlettre.test(codePostal.value.charAt(2))) { 
		codePostal.setCustomValidity("Troisième caractère du code postal invalide, veuillez entrer une lettre."); 
	} else if (patternChiffre.test(codePostal.value.charAt(3))){ 
		codePostal.setCustomValidity("Quatrième caractère du code postal invalide, veuillez entrer un chiffre."); 
	} else if (patternlettre.test(codePostal.value.charAt(4))) { 
		codePostal.setCustomValidity("Cinquième caractère du code postal invalide, veuillez entrer une lettre."); 
	} else if (patternChiffre.test(codePostal.value.charAt(5))){ 
		codePostal.setCustomValidity("Sixième caractère du code postal invalide, veuillez entrer un chiffre."); 
	} else {
		codePostal.setCustomValidity('');
	}
}
 
function validerCourriel(courriel){
	
	var posACom = courriel.value.indexOf("@", 1); // @ est present ?
	
	if (courriel.validity.valueMissing){ 	// courriel est vide?
		courriel.setCustomValidity("Veuillez saisir votre adresse de courrier électronique.");
	} else if (posACom == -1){
		courriel.setCustomValidity("Votre adresse de courriel n'est pas valide. Elle ne contient pas le symbole « @ ».");
	} else if (courriel.value.indexOf(".", posACom + 1) == -1) { // . est present ?
			courriel.setCustomValidity("Veuillez saisir un domaine.");
	} else {
		courriel.setCustomValidity('');
	}
}

function validerCours(){
	
	var premierCours = document.getElementById("cours1");
	var deuxiemeCours = document.getElementById("cours2");
	var troisiemeCours = document.getElementById("cours3");
	var quatriemeCours = document.getElementById("cours4");

	if(!(premierCours.checked || deuxiemeCours.checked || troisiemeCours.checked || quatriemeCours.checked)){
		quatriemeCours.setCustomValidity("Veuillez s.v.p. nous indiquer quels cours vous comptez suivre.");
		return false;
	} 
	
	return true;
}

function effacerMessageCours(){

	document.getElementById("cours4").setCustomValidity('');
}

function validerSession(){

	var premiereSession = document.getElementById("session1");
	var deuxiemeSession = document.getElementById("session2");
	var troisiemeSession = document.getElementById("session3");

	if(!(premiereSession.checked || deuxiemeSession.checked || troisiemeSession.checked)){
		troisiemeSession.setCustomValidity("Veuillez s.v.p. nous indiquer quelle session vous pensez vous inscrire.");
		return false;
	} 

	return true;
}

function effacerMessageSession(){

	document.getElementById("session3").setCustomValidity('');
}


