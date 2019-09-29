function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", 'https://anilist.co/api/v2/oauth/authorize?client_id=2636&redirect_uri=chrome-extension://bgbbpdkkadjpfolbgofgilfalhcnpojk/thanksani.html&response_type=code' , true);
  xhttp.send();
}
