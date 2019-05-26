function valider(){
	
	if(validerGenre__film()){
		if(validerFilm__hab()){
			
			
			return true;
		}
	} 
	return false;
}

function validerPrenom(prenom){

	if (prenom.validity.valueMissing){ 	// prénom est vide?
		prenom.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (prenom.validity.patternMismatch){
		prenom.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}
function validerAge(age){

	if (prenom.validity.valueMissing){ 	// Age est vide
		prenom.setCustomValidity("Veuillez choisir votre âge");
}

		
function validerAnimal(animal){

	if (animal.validity.valueMissing){ 	// animal est vide?
		animal.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (animal.validity.patternMismatch){
		animal.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerCode(codepermanent){

	var patternChiffre = /[^0-9]/;
	var patternlettre = /[^A-Za-z]/;
	
	if (codePermanent.validity.valueMissing){ 	// code permanent est vide?
		codePermanent.setCustomValidity("Veuillez saisir votre code permanent.");
	} else if (codePermanent.value.length != 13) { 
		codePermanent.setCustomValidity("Veuillez entrer 13 caractères pour le code permanent."); 
	} else if (patternlettre.test(codePermanent.value.charAt(0))) { 
		codePermanent.setCustomValidity("Premier caractère du code permanent invalide, veuillez entrer une lettre."); 
	} else if (patternlettre.test(codePermanent.value.charAt(1))){ 
		codePermanent.setCustomValidity("Deuxième caractère du code permanent invalide, veuillez entrer un lettre."); 
	} else if (patternlettre.test(codePermanent.value.charAt(2))) { 
		codePermanent.setCustomValidity("Troisième caractère du code permanent invalide, veuillez entrer une lettre."); 
	} else if (patternlettre.test(codePermanent.value.charAt(3))){ 
		codePermanent.setCustomValidity("Quatrième caractère du code permanent invalide, veuillez entrer un lettre."); 
	} else if (patternlettre.test(codePermanent.value.charAt(4))) { 
		codePermanent.setCustomValidity("Cinquième caractère du code permanent invalide, veuillez entrer une lettre."); 
	} else if (patternChiffre.test(codePermanent.value.charAt(5))){ 
		codePermanent.setCustomValidity("Sixième caractère du code permanent invalide, veuillez entrer un chiffre."); 	
	} else if (patternChiffre.test(codePermanent.value.charAt(6))){ 
		codePermanent.setCustomValidity("Septième caractère du code permanent invalide, veuillez entrer un chiffre."); 		
	} else if (patternChiffre.test(codePermanent.value.charAt(7))){ 
		codePermanent.setCustomValidity("Huitième caractère du code permanent invalide, veuillez entrer un chiffre."); 		
	} else if (patternChiffre.test(codePermanent.value.charAt(8))){ 
		codePermanent.setCustomValidity("Neuvième caractère du code permanent invalide, veuillez entrer un chiffre."); 	
	} else if (patternChiffre.test(codePermanent.value.charAt(9))){ 
		codePermanent.setCustomValidity("Dixième caractère du code permanent invalide, veuillez entrer un chiffre."); 		
	} else if (patternChiffre.test(codePermanent.value.charAt(10))){ 
		codePermanent.setCustomValidity("Onzième caractère du code permanent invalide, veuillez entrer un chiffre."); 		
	
	
	} else if (patternChiffre.test(codePermanent.value.charAt(11))){ 
		codePermanent.setCustomValidity("Douzième caractère du code permanent invalide, veuillez entrer un chiffre."); 		
	
	
	} else if (patternChiffre.test(codePermanent.value.charAt(12))){ 
		codePermanent.setCustomValidity("Treizième caractère du code permanent invalide, veuillez entrer un chiffre."); 		
	
	
	}	else {
		codePermanent.setCustomValidity('');
	}
}
 
}

function validerCouleur(couleur){

	if (couleur.validity.valueMissing){ 	// couleur est vide?
		couleur.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (couleur.validity.patternMismatch){
		couleur.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerArtiste(artiste){

	if (artiste.validity.valueMissing){ 	// artiste est vide?
		artiste.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (artiste.validity.patternMismatch){
		artiste.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerFilm(film){

	if (musique.validity.valueMissing){ 	// musique est vide?
		musique.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (musique.validity.patternMismatch){
		musique.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerProf(prof){

	if (prof.validity.valueMissing){ 	// prof est vide?
		prof.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (prof.validity.patternMismatch){
		prof.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerNom(nom){

	if (nom.validity.valueMissing){ 	// nom est vide?
		nom.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (nom.validity.patternMismatch){
		nom.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerActeur(acteur){

	if (acteur.validity.valueMissing){ 	// acteur est vide?
		acteur.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (acteur.validity.patternMismatch){
		acteur.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerFilm(film){

	if (film.validity.valueMissing){ 	// film est vide?
		film.setCustomValidity("Veuillez saisir votre prénom.");
	} else if (film.validity.patternMismatch){
		film.setCustomValidity("Veuillez entrer seulement des lettres dans le prénom.");
	}
}

function validerGenre__musique(){
	
	var premierGenre__musique = document.getElementById("genre__musique1");
	var deuxiemeGenre__musique = document.getElementById("genre__musique2");
	var troisiemeGenre__musique = document.getElementById("genre__musique3");
	var quatriemeGenre__musique = document.getElementById("genre__musique4");
	var cinquiemeGenre__musique = document.getElementById("genre__musique5");
	var sixiemeGenre__musique = document.getElementById("genre__musique6");
	var septiemeGenre__musique = document.getElementById("genre__musique7");
	var huitiemeGenre__musique = document.getElementById("genre__musique8");
	var neuviemeGenre__musique = document.getElementById("genre__musique9");
	var dixiemeGenre__musique = document.getElementById("genre__musique10");
	var onziemeGenre__musique = document.getElementById("genre__musique11");
	var douziemeGenre__musique = document.getElementById("genre__musique12");
	var treiziemeGenre__musique = document.getElementById("genre__musique13");


	if(!(premierGenre__musique.checked || deuxiemeGenre__musique.checked || troisiemeGenre__musique.checked || quatriemeGenre__musique.checked || 
	cinquiemeGenre__musique.checked || 
	sixiemeGenre__musique.checked || 
	septiemeGenre__musique.checked || 
	huitiemeGenre__musique.checked || 
	neuviemeGenre__musique.checked || 
	dixiemeGenre__musique.checked || 
	onziemeGenre__musique.checked || 
	douziemeGenre__musique.checked || 
	treiziemeGenre__musique.checked)){
		treiziemeGenre__musique.setCustomValidity("Veuillez s.v.p. nous indiquer quels Genres musique vous comptez suivre.");
		return false;
	} 
	
	return true;
}

function effacerMessageGenre__musique(){

	document.getElementById("Genre__musique13").setCustomValidity('');
}

function validerGenre__film(){
	
	var premierGenre__film = document.getElementById("genre__film1");
	var deuxiemeGenre__film = document.getElementById("genre__film2");
	var troisiemeGenre__film = document.getElementById("genre__film3");
	var quatriemeGenre__film = document.getElementById("genre__film4");
	var cinquiemeGenre__film = document.getElementById("genre__film5");
	var sixiemeGenre__film = document.getElementById("genre__film6");


	if(!(premierGenre__film.checked ||
		deuxiemeGenre__film.checked ||
		troisiemeGenre__film.checked|| 
		quatriemeGenre__film.checked || 
		cinquiemeGenre__film.checked || 
		sixiemeGenre__film.checked || 
	){
		sixiemeGenre__film.setCustomValidity("Veuillez s.v.p. nous indiquer quels Genres film vous aimez.");
		return false;
	} 
	
	return true;
}




function validerFilm__hab(){

	var premiereFilm__hab = document.getElementById("film__hab1");
	var deuxiemeFilm__hab = document.getElementById("film__hab2");
	var troisiemeFilm__hab = document.getElementById("film__hab3");

	if(!(premiereFilm__hab.checked || deuxiemeFilm__hab.checked || troisiemeFilm__hab.checked)){
		troisiemeFilm__hab.setCustomValidity("Veuillez s.v.p. nous indiquer quelle film__hab vous pensez vous inscrire.");
		return false;
	} 

	return true;
}

