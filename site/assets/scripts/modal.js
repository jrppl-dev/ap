// Get the modal
var modal = document.querySelector(".modal");
// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
var modalButtons = document.getElementsByClassName("btn-modal")

for (let i = 0; i < modalButtons.length; i++) {
    modalButtons[i].onclick = function () {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}