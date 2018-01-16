function validerCin() {
	var cin=document.getElementById('cin');
   var modeleCin=/^[a-zA-Z]{1,2}[0-9]{6}/ ;
if (!modeleCin.test(cin.value)) {
alert("cin non valide");
}
}

