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

//BACKGROUND RESET Element
var cachedEl;

//create error message 
var errorDiv = document.createElement('div');
var errorDivBill = document.createElement('div');
errorDivBill.innerText = 'Please enter a number';
errorDiv.innerText = 'Please enter a number';
var customError = document.getElementById('custom-tip');

//Grab #Output Divs
var tipOutputPerson = document.getElementById('tip-output-person');
var tipOutputTotal = document.getElementById('tip-output-total');

//grab percent amount on click- take textvalue
var percentSelected = [].slice.call(document.getElementsByClassName('percent'));








//All events met for bill/people/custom

bill.addEventListener('input', function(){
    billInput = document.getElementById('bill').value;
        /*
        if(billInput<1 ){
            alert('no negatives');
        } else {
            allInputsMet(selectedPercent);
        };
        */
    allInputsMet(selectedPercent);
},false);


people.addEventListener('input', function(){
    peopleInput = document.getElementById('people').value;
        allInputsMet(selectedPercent);
},false);



//Event listeners for Percents and custom
percentSelected.forEach(function(element, index) {
    element.addEventListener("click", function() {
        selectedPercent = element.innerText;
        cachedEl = element;
        element.style.background = 'hsl(172, 67%, 45%)';
        element.style.color = 'hsl(183, 100%, 15%)';
        allInputsMet(selectedPercent);
    }, false);
})

custom.addEventListener("blur", function(event) {
        selectedPercent = event.target.value;
        element = event.target;
        element.style.background = 'hsl(189, 41%, 97%)';
        element.style.color = 'hsl(183, 100%, 15%)';
        allInputsMet(selectedPercent);
},false);



//All inputs met
function allInputsMet(selectedPercent){
    if (billInput != null && (peopleInput > 0) && selectedPercent != null) {
        customOrNumber(selectedPercent);
    };
};


//RESET 
resetButton = document.getElementById('resetButton');
resetButton.addEventListener("click", function(){
    tipOutputTotal.innerText = "$00.00";
    tipOutputPerson.innerText = "$00.00";
    document.getElementById('bill').value = '';
    document.getElementById('people').value = '';
    document.getElementById('custom').value = '';
    //Delete all variable history
    peopleInput = undefined;
    billInput = undefined;
    selectedPercent = undefined;
    //Reset Percent Styling
    if(cachedEl !== undefined) {
        cachedEl.style.background ='hsl(183, 100%, 15%)';
        cachedEl.style.color = 'hsl(0, 0%, 100%)'
    }
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
        customError.append(errorDiv);
    }
}


//Calculate the outputs
function calculator(percent) {
    //totalAmount 
    var totalPerPerson = ((percent/100) * billInput) / peopleInput;
    var totalAmount = totalPerPerson + (billInput/peopleInput);

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