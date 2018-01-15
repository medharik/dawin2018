function charger(age) {
  var xhttp = new XMLHttpRequest(); // xhr : classe pour echange http avec js
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   //  document.getElementById("resultat").innerHTML = this.responseText;
    var  js=JSON.parse(this.responseText);
     document.getElementById("resultat").innerHTML="message est "+js.message ;
    }else {
    	document.getElementById("resultat").innerHTML = "...";
    }
  };
  xhttp.open("GET", "ajax.php?age="+age, true);
  xhttp.send();
}