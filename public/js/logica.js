var valor_global;
function consulta_online(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       // Typical action to be performed when the document is ready:
	       document.getElementById("b").innerHTML = xhttp.responseText;
	       if(xhttp.responseText!=undefined){
	       	localStorage.setItem("valor_global",xhttp.responseText);	
	       }
	       
	    }
	};
	xhttp.open("GET", url+"/recurso", true);
	xhttp.send();
}