//cache text box,button

var emailButton = document.getElementById('email-button');
var msg = document.getElementById('msg');
var errorImg = document.getElementById('email-input');

//event listener of buttone
emailButton.addEventListener('click', checkLength, false);

function checkLength() {
    var emailInput = document.getElementById('email-input').value;
    

    if (emailInput.length < 5) {
        msg.textContent = "Please provide a valid email";
        errorImg.classList.add("inputToggle");
    }  else {
        console.log(emailInput);
        checkContent();
    }

    function checkContent() {
        //if no @ or .com 
        if (emailInput.includes('@') && emailInput.includes('.com')){
            msg.textContent = "";
            errorImg.classList.remove("inputToggle");
            alert('Thank you for subscribing!');
        }   else {
            msg.textContent = "Please provide a valid email";
            errorImg.classList.add("inputToggle");
        }
    }

};