function fn(id){
	var cloak = document.getElementById("main-menu");
	if(cloak.style.visibility === 'hidden')
		cloak.style.visibility = 'visible';
	else
		cloak.style.visibility = 'hidden';
}

// function toggleMenu(id){
// 	var cloak = document.getElementById(id);
// 	cloak.classlist.toggle('show-menu');
// }