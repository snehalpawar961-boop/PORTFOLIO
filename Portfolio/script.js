function darkMode() {
    document.body.classList.toggle("dark");
}

// Typing Effect
var text = "Web Developer | Programmer";
var i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
window.onload = typing;

// Form Validation
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }
    return true;
}