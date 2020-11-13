
// 1) I need the var = tog or a replacement to be more diverse...
// I don't want to have to list all the menu buttons / toggeles.

// OR ) If That isn't possible, I need it to loop through and only catch the ones...
// that are on a particular page. The way it is, if a button / toggle that is listed...
// isn't on a web page, the JS script will break and no buttons / toggles will work.

// 2) Need to set parent and grandparent elements to a class of active 
// when on a child or grandchild web page.

var tog = ["userMenu","cartMenu"];  // ***
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

    // 3) style="pointer-events: none;" *** <- Needs to be added to 'ALL' elements... 
    // that are not Form Elemets => inputs, textboxes, buttons, select, options etc.
    // So I don't have to do this anymore -> <h1 style="pointer-events: none;">Cart</h1>
    if (event.target != elem && event.target.parentNode  // ***
      != elem && !event.target.classList.contains('togglebtn')) {
      elem.style.display = 'none';
    }
  }
});