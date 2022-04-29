function kontakt() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("main").innerHTML = this.responseText;
      }
    xhttp.open("GET", "js/ajax/kontakt.txt", true);
    xhttp.send();
  }
  function koszyk() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("main").innerHTML = this.responseText;
      }
    xhttp.open("GET", "js/ajax/koszyk.txt", true);
    xhttp.send();
  }
  function mandarynka() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("main").innerHTML = this.responseText;
      }
    xhttp.open("GET", "js/ajax/mandarynka.txt", true);
    xhttp.send();
  }
  function konto() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("main").innerHTML = this.responseText;
      }
    xhttp.open("GET", "js/ajax/konto.txt", true);
    xhttp.send();
  }