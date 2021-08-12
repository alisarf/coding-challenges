//Grab #bill input
var bill = document.getElementById('bill'); //put in fxn
var billInput; //create global scope



//Grab #people input
var people = document.getElementById('people');
var peopleInput;


//Grab #tip-output-person
var tipOutputPerson = document.getElementById('tip-output-person');

//Grab #tip-output-total
var tipOutputTotal = document.getElementById('tip-output-total');

//grab percent amount on click- take textvalue
var percentSelected = [].slice.call(document.getElementsByClassName('percent'));
console.log(percentSelected);

//grab on blur

bill.addEventListener('blur', function(){
    billInput = document.getElementById('bill').value;
    //console.log(billInput);

    //test output total
    //tipOutputTotal.innerText = '$' + billInput;
},false);

people.addEventListener('blur', function(){
    peopleInput = document.getElementById('people').value;
    console.log(peopleInput);



    //test output total
    tipOutputPerson.innerText = '$' + peopleInput;
},false);

percentSelected.forEach(function(element, index) {
    element.addEventListener("click", function() {
        selectedPercent = element.innerText;
        customOrNumber(selectedPercent);
    })
})

function customOrNumber(selectedPercent){
    if (selectedPercent.endsWith("%")) {
        //remove percent character
        var el = selectedPercent.substring(0, selectedPercent.lastIndexOf("%"));
        //convert to number
        var numberPercent = Number(el);
        console.log(numberPercent + 10);
        calculator(numberPercent);

    } else {
        console.log('its custom');
    }
}

function calculator(percent) {
    var totalAmount = (percent/100) * billInput;
    var totalPerPerson = (totalAmount/peopleInput);

    tipOutputTotal.innerText = '$' + totalAmount.toFixed(2);
    tipOutputPerson.innerText = '$' + totalPerPerson.toFixed(2);
}