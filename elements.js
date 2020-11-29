var tog = ["userMenu","cartMenu"];
function toggleElem(t) {
  for (var tm in tog) {
    if (tog[tm] !=t) {
      document.getElementById(tog[tm]).style.display = 'none';
    }
  }
  if (document.getElementById(t).style.display == 'block') {
    document.getElementById(t).style.display = 'none';
  } else {
    document.getElementById(t).style.display = 'block';
  }
}
window.addEventListener('mousedown', function(event) {
  for (var i=0; i < tog.length; i++) {
    var elem = document.getElementById(tog[i]);
    if (event.target != elem && event.target.parentNode  // ***
      != elem && !event.target.classList.contains('togglebtn')) {
      elem.style.display = 'none';
    }
  }
});
