if (navigator.onLine) {
  
  document.getElementById("h2").innerHTML="ONLINE";
  consulta_online();
} else {
  document.getElementById("h2").innerHTML="OFFLINE";
  document.getElementById("b").innerHTML=localStorage.getItem('valor_global');
  
}

window.addEventListener("offline", function(e) {
 document.getElementById("h2").innerHTML="OFFLINE";
 document.getElementById("b").innerHTML=localStorage.getItem('valor_global');
}, false);

window.addEventListener("online", function(e) {
 document.getElementById("h2").innerHTML="ONLINE";
 consulta_online();
}, false);

window.applicationCache.addEventListener("error", function(e) {
  alert("Error fetching manifest: a good chance we are offline");
});

