function charger(age) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("resultat").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax.php?age="+age, true);
  xhttp.send();
}