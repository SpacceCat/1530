function reappear(){
	document.getElementById("hideMe").style.visibility = "visible";
}

function toggleVisi(id){
	var cloak = document.getElementById("show-menu");
	if(cloak.style.display === 'block'){
		cloak.style.display = 'none';
	}
	else{
		cloak.style.display = 'block';
	}
}