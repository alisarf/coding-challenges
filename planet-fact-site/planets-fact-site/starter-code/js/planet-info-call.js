console.log('yo')
var planetName, planetSource, planetOverview,
    structure, geology, rotation,
    radius,temperature, revolution, planetContent;
var planetContent = document.getElementById('planet-content');
planetName = document.getElementById('planet-name');


planetSource= document.getElementById('planet-source');
//planetOverview= document.getElementById('');
//structure= document.getElementById('');
//geology= document.getElementById('');
rotation= document.getElementById('rotation');
radius= document.getElementById('radius');
temperature= document.getElementById('temperature');
revolution= document.getElementById('revolution');
planetImage = document.getElementById('planet-image');


overviewBtn = document.getElementById('overview-btn');
structureBtn = document.getElementById('structure-btn');
surfaceBtn = document.getElementById('surface-btn');


var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject[0].name +'testing planet JSON')
        //var newContent = ''
        console.log('working request');
        //for(var i =0; i< responseObject.length; i++) {
        //    console.log('working request');
        //}
        var planetUl = document.getElementById('planet-navigation');
        planetUl.addEventListener('click', function(e) {
            var selectedPlanet = (e.target.innerHTML);
            console.log(selectedPlanet)
            



            console.log(selectedPlanet + 'is the selected planet');
            for(var i = 0; i <responseObject.length; i++){
                if (selectedPlanet === responseObject[i].name) {
                    //name
                    planetName.innerHTML = responseObject[i].name;

                    //overview initially loads on click of new planet
                    planetContent.innerHTML = responseObject[i].overview.content;
                    overviewBtn.classList.add('active');
                    structureBtn.classList.remove('active');
                    surfaceBtn.classList.remove('active');
                    
                    //All other facts
                    rotation.innerHTML = responseObject[i].rotation;
                    radius.innerHTML = responseObject[i].radius;
                    temperature.innerHTML = responseObject[i].temperature;
                    revolution.innerHTML = responseObject[i].revolution;
                    planetImage.src = responseObject[i].images.planet;
                    //return i for the preceeding event listeners
                    return i;

                } else {
                    console.log('no matching planet info.')
                }


                //Change sub-context depending  on selected planet
                document.getElementById('overview-btn').addEventListener('click', function(){
                    planetContent.innerHTML = responseObject[i].overview.content;
                    planetImage.src = responseObject[i].images.planet;
                },false);
                document.getElementById('structure-btn').addEventListener('click', function(){
                    planetContent.innerHTML = responseObject[i].structure.content;
                    planetImage.src = responseObject[i].images.internal;
                },false);
                document.getElementById('surface-btn').addEventListener('click', function(){
                    planetContent.innerHTML = responseObject[i].geology.content;
                    planetImage.src = responseObject[i].images.geology;
                },false);


            }
            var planetChoice = document.querySelectorAll('.planet-description');
            console.log(planetChoice);


        }, false);


        //Initially set to Earth
        overviewBtn.addEventListener('click', function(){
            var i = 2;
            planetContent.innerHTML = responseObject[i].overview.content;
            planetImage.src = responseObject[i].images.planet;
            overviewBtn.classList.add('active');
            structureBtn.classList.remove('active');
            surfaceBtn.classList.remove('active');
        },false);
        structureBtn.addEventListener('click', function(){
            var i = 2;
            planetContent.innerHTML = responseObject[i].structure.content;
            planetImage.src = responseObject[i].images.internal;
            structureBtn.classList.add('active');
            overviewBtn.classList.remove('active');
            surfaceBtn.classList.remove('active');
        },false);
        surfaceBtn.addEventListener('click', function(){
            var i = 2;
            planetContent.innerHTML = responseObject[i].geology.content;
            planetImage.src = responseObject[i].images.geology;
            surfaceBtn.classList.add('active');
            overviewBtn.classList.remove('active');
            structureBtn.classList.remove('active');
        },false);

    };
};




xhr.open('GET', 'starter-code/data.json', true);
xhr.send(null);