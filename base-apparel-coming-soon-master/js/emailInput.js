//cache text box,button

var emailButton = document.getElementById('email-button');
console.log('this works')
//event listener of buttone
emailButton.addEventListener('click', checkEmail());

function checkEmail() {
    var emailInput = document.getElementById('email-input').value;
    console.log("hello");
} ;