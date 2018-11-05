var objave;
var trenutnastr = 0;
var url ='http://127.0.0.1:5000/';
var objave;
var Http = new XMLHttpRequest();
Http.open("GET", 'https://sr-gold-website-backend.herokuapp.com/');


Http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
  console.log("ready")
  objave = JSON.parse(Http.response);
  console.log(objave);
  Knjig();
}

        //var Data = JSON.parse(Http.responseText);
        //console.log(Data);
      //  console.log(Data.first);


}

function Pocetna(){
    /*var xhttp;
    if (window.XMLHttpRequest) {
      // code for modern browsers
      xhttp = new XMLHttpRequest();
    } else {
      // code for old IE browsers
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      objave = JSON.parse(xhttp.responseText)
    }
    }
    //xhttp.open("GET", "https://sr-gold-website-backend.herokuapp.com/Knjig", true);
    xhttp.open("GET", "localhost:5000/Knjig", true);
    xhttp.send();
    console.log(objave);
*/

/*var Http = new XMLHttpRequest();
Http.open("GET", 'localhost:5000/');
var Data = Http.responseText;
console.log(Data);


Http.onreadystatechange = function () {
  console.log("ready")



         console.log("1111");
        console.log("ready")
        //var Data = JSON.parse(Http.responseText);
        console.log(Data);
      //  console.log(Data.first);


}*/
console.log("presend");
Http.send();


/*    var root = document.getElementById("lista");
    while( root.firstChild ){
      root.removeChild( root.firstChild );
    }
		document.getElementById("lista").innerHTML += "<li class=\"nav-item active\">" +
      "<a class=\"nav-link\" href=\"#\" onclick =\"Knjig()\">Knjigovodstvena Agencija<span class=\"sr-only\">(current)</span></a>" +
    "</li>" +
    "<li class=\"nav-item\">" +
      "<a class=\"nav-link\" onclick =\"Poljo()\">Poljoprivredna apoteka</a>" +
    "</li>"+
    "<li class=\"nav-item\">"+
      "<a class=\"nav-link\" onclick =\"Posta()\">Pošta</a>"+
    "</li>" +
    "<li class=\"nav-item\">"+
      "<a class=\"nav-link\" onclick =\"Ceno()\">Cenovnik</a>"+
    "</li>" +
    "<li class=\"nav-item\">"+
      "<a class=\"nav-link\" onclick =\"Kontakt()\">Kontakti</a>"+
    "</li>";*/
}

function Knjig(){
  var root = document.getElementById("lista");
  while( root.firstChild ){
    root.removeChild( root.firstChild );
  }
  document.getElementById("lista").innerHTML += "<li class=\"nav-item active\">" +
    "<a class=\"nav-link\" onclick =\"Knjig()\">Knjigovodstvena Agencija<span class=\"sr-only\">(current)</span></a>" +
  "</li>" +
  "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" onclick =\"Poljo()\">Poljoprivredna apoteka</a>" +
  "</li>"+
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Posta()\">Pošta</a>"+
  "</li>" +
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Ceno()\">Cenovnik</a>"+
  "</li>" +
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Kontakt()\">Kontakti</a>"+
  "</li>";
  var count = Object.keys(objave).length;
  var i = 0;
  var j = 0;
  var podaci = [];
  console.log(count)
  while(i < count){
    if(objave[i].Strana == "Knjig"){
      podaci[j]=objave[i];
      j++;
    }
    i++;
  }
  
}

function Poljo(){
  var root = document.getElementById("lista");
  while( root.firstChild ){
    root.removeChild( root.firstChild );
  }
  document.getElementById("lista").innerHTML += "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" onclick =\"Knjig()\">Knjigovodstvena Agencija</a>" +
  "</li>" +
  "<li class=\"nav-item active\">" +
    "<a class=\"nav-link\" onclick =\"Poljo()\">Poljoprivredna apoteka<span class=\"sr-only\">(current)</span></a>" +
  "</li>"+
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Posta()\">Pošta</a>"+
  "</li>" +
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Ceno()\">Cenovnik</a>"+
  "</li>" +
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Kontakt()\">Kontakti</a>"+
  "</li>";
}

function Posta(){
  var root = document.getElementById("lista");
  while( root.firstChild ){
    root.removeChild( root.firstChild );
  }
  document.getElementById("lista").innerHTML += "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" onclick =\"Knjig()\">Knjigovodstvena Agencija</a>" +
  "</li>" +
  "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" onclick =\"Poljo()\">Poljoprivredna apoteka</a>" +
  "</li>"+
  "<li class=\"nav-item active\">"+
    "<a class=\"nav-link\" onclick =\"Posta()\">Pošta<span class=\"sr-only\">(current)</span></a>"+
  "</li>" +
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Ceno()\">Cenovnik</a>"+
  "</li>" +
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Kontakt()\">Kontakti</a>"+
  "</li>";
}

function Ceno(){
  var root = document.getElementById("lista");
  while( root.firstChild ){
    root.removeChild( root.firstChild );
  }
  document.getElementById("lista").innerHTML += "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" onclick =\"Knjig()\">Knjigovodstvena Agencija</a>" +
  "</li>" +
  "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" onclick =\"Poljo()\">Poljoprivredna apoteka</a>" +
  "</li>"+
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Posta()\">Pošta</a>"+
  "</li>" +
  "<li class=\"nav-item active\">"+
    "<a class=\"nav-link\" onclick =\"Ceno()\">Cenovnik<span class=\"sr-only\">(current)</span></a>"+
  "</li>" +
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Kontakt()\">Kontakti</a>"+
  "</li>";
}

function Kontakt(){
  var root = document.getElementById("lista");
  while( root.firstChild ){
    root.removeChild( root.firstChild );
  }
  document.getElementById("lista").innerHTML += "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" onclick =\"Knjig()\">Knjigovodstvena Agencija</a>" +
  "</li>" +
  "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" onclick =\"Poljo()\">Poljoprivredna apoteka</a>" +
  "</li>"+
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Posta()\">Pošta</a>"+
  "</li>" +
  "<li class=\"nav-item\">"+
    "<a class=\"nav-link\" onclick =\"Ceno()\">Cenovnik</a>"+
  "</li>" +
  "<li class=\"nav-item active\">"+
    "<a class=\"nav-link\" onclick =\"Kontakt()\">Kontakti<span class=\"sr-only\">(current)</span></a>"+
  "</li>";
}
