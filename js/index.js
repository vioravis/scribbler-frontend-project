// Modal for Create Post
var modal2 = document.getElementById("create-post-modal");

// Get the button that opens the modal
var btn2 = document.getElementById("create-post-button");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal2.style.display = "none";
  }
}