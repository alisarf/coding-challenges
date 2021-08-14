/*TO-Do: 
APPEND ERROR MESSAGE WHEN NOT NUMBER VALUE for CUSTOM 
then style div

CLEAR PEOPLE COUNT VARIABLE WITH RESET*/

//Grab #bill input
var bill = document.getElementById('bill'); //put in fxn
var billInput; //create global scope
var selectedPercent;

//Grab #people input
var people = document.getElementById('people');
var peopleInput;

//Grab #custom input
var custom = document.getElementById('custom');
var customInput;

//create error message 
var errorDiv = document.createElement('div');
var errorDivBill = document.createElement('div');
errorDivBill.innerText = 'Please enter a number';
errorDiv.innerText = 'Please enter a number';
var customError = document.getElementById('custom-tip');
//customError.append(errorDiv);

//Grab #Output Divs
var tipOutputPerson = document.getElementById('tip-output-person');
var tipOutputTotal = document.getElementById('tip-output-total');

//grab percent amount on click- take textvalue
var percentSelected = [].slice.call(document.getElementsByClassName('percent'));
console.log(percentSelected);







bill.addEventListener('blur', function(){
    billInput = document.getElementById('bill').value;
        if(billInput<1 ){
            alert('no negatives');
        } else {
            allInputsMet(selectedPercent);
        };
},false);



people.addEventListener('blur', function(){
    peopleInput = document.getElementById('people').value;
        allInputsMet(selectedPercent);
},false);






//Event listeners for Percents and custom
percentSelected.forEach(function(element, index) {
    element.addEventListener("click", function() {
        selectedPercent = element.innerText;
        element.style.background = 'hsl(185, 41%, 84%)';
        element.style.color = 'hsl(183, 100%, 15%)';
        allInputsMet(selectedPercent);
    }, false);
})

custom.addEventListener("blur", function(event) {
        selectedPercent = event.target.value;
        element = event.target;
        element.style.background = 'hsl(185, 41%, 84%)';
        element.style.color = 'hsl(183, 100%, 15%)';
        customOrNumber(selectedPercent);
},false);












//All inputs met
function allInputsMet(selectedPercent){
    if (billInput != null && peopleInput != null && selectedPercent !=null) {
        console.log('all values present');
        customOrNumber(selectedPercent);
    };
};


//RESET 
resetButton = document.getElementById('resetButton');
console.log(resetButton);
resetButton.addEventListener("click", function(){
    console.log('reset hitt');
    tipOutputTotal.innerText = "$00.00";
    tipOutputPerson.innerText = "$00.00";
    document.getElementById('bill').value = '';
    document.getElementById('people').value = '';
},false);










































function customOrNumber(selectedPercent){
    if (selectedPercent.endsWith("%")) {
        var numberTip = createNumber(selectedPercent);
        errorDiv.innerText = '';
        calculator(numberTip);
    } else if (!isNaN(selectedPercent)){
        //send to calculator
        errorDiv.innerText = '';
        calculator(selectedPercent);
    } else {
        console.log('helppppp')
        customError.append(errorDiv);
    }
}








//Calculate the outputs
function calculator(percent) {
    var totalAmount = (percent/100) * billInput;
    var totalPerPerson = (totalAmount/peopleInput);

    // do this when all inputs are submitted
    tipOutputTotal.innerText = '$' + totalAmount.toFixed(2);
    tipOutputPerson.innerText = '$' + totalPerPerson.toFixed(2);
}


//Creates number format
function createNumber(percent){
    var el = percent.substring(0, percent.lastIndexOf("%"));
    var elPercent = Number(el);
    return elPercent;
}