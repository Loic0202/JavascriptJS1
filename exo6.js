var students = ["Alexandre","Béatrice","Benoît","Émeric","Florian","Gwenaëlle","Jérémy","Johan","Justine M","Justine P","Justine T","Kévin","Loïc","Mathieu","Matthias","Rémi","Samuel","Sébastien","Sullivan","Thomas","Tiffany","Valentin","Yann"];


students.forEach(function(student) {
	document.querySelector("#studentsList").innerHTML += `<li>${student}</li>`; 
})