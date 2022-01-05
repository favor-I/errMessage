// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let msgTag = document.getElementById("error")

function errMssg() {
    msgTag.textContent += "Something went wrong, please try again"
}