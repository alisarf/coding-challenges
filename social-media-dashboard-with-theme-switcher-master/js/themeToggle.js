

var testElements = document.getElementsByClassName('lightTheme');
var checkbox = document.getElementById('toggle');

checkbox.addEventListener('click',function(){
    for(var i = 0; i <= testElements.length ; i++ ) {
        testElements[i].classList.toggle('darkTheme');
        console.log(testElements[i]);
    };
}, false);

//change background css

