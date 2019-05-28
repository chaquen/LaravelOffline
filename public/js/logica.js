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

document.getElementById('num2').addEventListener("change", function(e) {
  document.getElementById("lblMsn").innerHTML="";
  sumar(Number(this.value));
}, false);
document.getElementById('btnGuardarSuma').addEventListener("click", function(e) {
	if(Number(document.getElementById('num2').value)!=NaN){
		guardar_suma(Number(localStorage.getItem('valor_global')),Number(document.getElementById('num2').value),Number(document.getElementById("total").innerHTML));	
	}else{
		alert("Debes ingresar un valor numerico");
	}
 	
}, false);

function sumar(v){
	 var v1=Number(localStorage.getItem('valor_global'));
	 var t=v1+v;
	 document.getElementById("total").innerHTML=t;
}


function guardar_suma(v1,v2,t){
	
	if (navigator.onLine) {
		var csrfToken = document.getElementById('csrf-token').content;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		       // Typical action to be performed when the document is ready:
		       
		       document.getElementById("lblMsn").innerHTML=xhttp.responseText;
		       
		    }
		};
		xhttp.open("POST", url+"/guardar", true);
		xhttp.setRequestHeader('X-CSRF-TOKEN', csrfToken);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		postString = "V1=" + v1 + "&V2=" + v2+"&T=" + t;
		xhttp.send(postString);
    }else{
    	var suma=localStorage.getItem('suma');
    	if(suma!=null){
    		var arreglo=JSON.parse(suma);
    		arreglo.push([v1,v2]);
    		localStorage.setItem("suma",JSON.stringify(arreglo));
    	}else{
    		var arreglo=[];
    		arreglo.push([v1,v2]);
    		localStorage.setItem("suma",JSON.stringify(arreglo));
    	}
    	
    }


	
}

function guardar_offline(){

	    var csrfToken = document.getElementById('csrf-token').content;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		       // Typical action to be performed when the document is ready:
		       
		       document.getElementById("lblMsn").innerHTML=xhttp.responseText;
		       localStorage.removeItem("suma");
		    }
		};
		xhttp.open("POST", url+"/guardar_online", true);
		xhttp.setRequestHeader('X-CSRF-TOKEN', csrfToken);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.setRequestHeader("data", localStorage.getItem('suma'));
		//postString = localStorage.getItem('suma');
		xhttp.send();
}
