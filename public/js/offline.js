if (navigator.onLine) {
  
  document.getElementById("h2").innerHTML="ONLINE";
  consulta_online();
  guardar_offline();
} else {
  document.getElementById("h2").innerHTML="OFFLINE";
  document.getElementById("b").innerHTML=localStorage.getItem('valor_global');
  
}

window.addEventListener("offline", function(e) {
 document.getElementById("h2").innerHTML="OFFLINE";
 document.getElementById("b").innerHTML=localStorage.getItem('valor_global');
 document.getElementById("tl").innerHTML="Laravel Offline";
}, false);

window.addEventListener("online", function(e) {
 document.getElementById("h2").innerHTML="ONLINE";
 consulta_online();
 guardar_offline();
 document.getElementById("tl").innerHTML="Laravel Online";
}, false);

window.applicationCache.addEventListener("error", function(e) {
  alert("Error fetching manifest: a good chance we are offline");
});

