var arrow = document.getElementById('arrow-svg');

//click on arrow icon reveal lower section
arrow.addEventListener('click', function() {
    //toggle in classes from transform rotate
    document.getElementById('arrow-svg').classList.toggle('rotate');
    bottomclassList = document.getElementById('container-bottom').classList
    document.getElementById('container-bottom').classList.toggle('less-visibility-lower');
    document.getElementById('container').classList.toggle('less-visibility-upper');
    console.log(bottomclassList)

    toggleWords = document.getElementById('toggle-words');
    //ui shows more now
    if(toggleWords.innerHTML === "less") {
        toggleWords.innerHTML = "more";
    } else if (toggleWords.innerHTML === "more") {
        toggleWords.innerHTML = "less";
    } else {
        console.log('this is broken')
    };
    
}, false);

//Hover over the arrow Icon

arrow.addEventListener('mouseover', changeIconColor, true);
arrow.addEventListener('mouseout', changeIconColorBack, true);

function changeIconColor() { 
    document.getElementById('arrow-circle').style.fill = "rgb(142 142 142)";
} 
function changeIconColorBack() { 
    document.getElementById('arrow-circle').style.fill = "#303030";
} 



