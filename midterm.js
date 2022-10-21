var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var span1 = document.getElementsByClassName("btn1")[0];

btn.onclick = function() 
{
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
    modal.style.display = "none";
  }
  
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
