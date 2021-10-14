
var submitBtn = document.getElementById('contactSubmitBtn');

submitBtn.addEventListener('click', () => {
    var username = document.getElementById('name');
    var useremail = document.getElementById('email');
    var userphone = document.getElementById('phone');
    var usermessage = document.getElementById('message');
    

    nameValidation(username);
    //emailValidation(useremail);
    phoneValidation(userphone);
    messageValidation(usermessage);
    emailHandler(useremail);
});
    //name validation
function nameValidation(username){
    var alertMsg = username.parentNode.querySelector('.invalidFormat');
    var alertPara = username.parentNode.querySelector('p');
    if (username.value.length > 5) {
        console.log('perfect name');
        alertMsg.classList.remove('show');
    } else if ((username.value.length < 5) & (username.value.length > 0)) {
        console.log('too short of name')
        alertPara.textContent = 'Invalid Name';
        alertMsg.classList.add('show');
    } else if (username.value.length == 0){
        
        alertPara.textContent = "Can't be empty";
        alertMsg.classList.add('show');
        console.log(alertPara + 'is the name')
    } else {
        alertPara.textContent = "Invalid Name";
        alertMsg.classList.add('show');
    }
};

function phoneValidation(phone){
    var alertMsg = phone.parentNode.querySelector('.invalidFormat');
    var alertPara = phone.parentNode.querySelector('p');
    console.log(phone.value.length)
    if (phone.value.length == 10) {
        alertMsg.classList.remove('show');
    } else if (((phone.value.length < 10) || (phone.value.length > 10)) & (phone.value.length > 0)) {
        alertPara.textContent = "*10 digits";
        alertMsg.classList.add('show');
    } else if (phone.value.length == 0) {
        alertPara.textContent = "Can't be empty";
        alertMsg.classList.add('show');
    }
};

function messageValidation(message){
    var alertMsg = message.parentNode.querySelector('.invalidFormat');
    var alertPara = message.parentNode.querySelector('p');
    if ( (message.value.length < 10) || (message.value.length == 0) ) {
        alertPara.textContent = "Please provide more detail";
        alertMsg.classList.add('show');
    } else if (message.value.length > 50) {
        alertPara.textContent = "Exceeds maximum characters";
        alertMsg.classList.add('show');
    } else {
        alertMsg.classList.remove('show');
    }
};

    //validate email
function emailHandler(useremail) {
    var alertMsg = useremail.parentNode.querySelector('.invalidFormat');
    var alertPara = useremail.parentNode.querySelector('p');
    if ( emailValidation(useremail) == true ) {
        alertMsg.classList.remove('show');
    } else if(useremail.value.length == 0){
        //for empty
        alertPara.textContent = "Can't be empty";
        alertMsg.classList.add('show');
    } else if (emailValidation(useremail) == false) {
        alertPara.textContent = 'Invalid Format';
        alertMsg.classList.add('show');
    }
};
function emailValidation(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
}


//ACTIVE STATE BORDER FOR INPUT FOCUS
var borderActive = document.querySelectorAll('input');
console.log(borderActive)
Array.from(borderActive).forEach( (inputEl) => {
    inputEl.addEventListener('focus', () => {
        inputEl.parentNode.setAttribute('style', "border-bottom: 2px solid white;")
    });
    inputEl.addEventListener('blur', () => {
        inputEl.parentNode.setAttribute('style', "border-bottom: 1px solid white;")
    });
});