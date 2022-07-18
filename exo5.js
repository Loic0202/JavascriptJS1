var students = ["Alexandre","Béatrice","Benoît","Émeric","Florian","Gwenaëlle","Jérémy","Johan","Justine M","Justine P","Justine T","Kévin","Loïc","Mathieu","Matthias","Rémi","Samuel","Sébastien","Sullivan","Thomas","Tiffany","Valentin","Yann"];

var greetingsDiv = document.querySelector("#greetings");

for (var i=0; i < students.length; i++) {
	greetingsDiv.innerHTML += students[i] + "<br>";	
}
