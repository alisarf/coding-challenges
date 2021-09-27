
//DECLARE ELEMENTS FOR JSON TO FILL
var planetName, planetSource, planetOverview,
    structure, geology, rotation,
    radius, temperature, revolution, planetContent;

//GRAB EACH ELEMENT BY ID
planetContent = document.getElementById('planet-content');
planetName = document.getElementById('planet-name');
rotation= document.getElementById('rotation');
radius= document.getElementById('radius');
temperature= document.getElementById('temperature');
revolution= document.getElementById('revolution');
planetImage = document.getElementById('planet-image');
overviewBtn = document.getElementById('overview-btn');
structureBtn = document.getElementById('structure-btn');
surfaceBtn = document.getElementById('surface-btn');
planetSource= document.getElementById('planet-source');


//MAKE HTTP REQUEST FOR JSON FILE
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        var planetUl = document.getElementById('planet-navigation');
        //1. LISTEN FOR CLICK ON NAVIGATION
        planetUl.addEventListener('click', function(e) {
            // 2. make planet link option active  
            var planetlist = document.querySelectorAll('.activeplanetlink');
            Array.from(planetlist).forEach(listitem => { //<---USEFUL IN THE FUTURE INSTEAD OF FOR LOOP
                listitem.classList.remove('activeplanetlink')
            });

            e.target.classList.add('activeplanetlink');
            //------------------------------------//
            //3. get selected planet
            var selectedPlanet = (e.target.innerHTML);
            //4. match selected planet to JSON file
            for( var i = 0; i <responseObject.length; i++){
                if (selectedPlanet === responseObject[i].name) {
                    //swap planet name
                    planetName.innerHTML = responseObject[i].name;

                    //overview initially loads on click of new planet
                    planetContent.innerHTML = responseObject[i].overview.content;
                    overviewBtn.classList.add('active');
                    structureBtn.classList.remove('active');
                    surfaceBtn.classList.remove('active');

                    overviewlink(); //auto calls overview sourcelink on planet switch
                    
                    //All other facts
                    rotation.innerHTML = responseObject[i].rotation;
                    radius.innerHTML = responseObject[i].radius;
                    temperature.innerHTML = responseObject[i].temperature;
                    revolution.innerHTML = responseObject[i].revolution;
                    planetImage.src = responseObject[i].images.planet;


                    //GEOLOGY/OVERVIEW/STRUCTURE
                    //Change sub-context depending  on selected planet
                    document.getElementById('overview-btn').addEventListener('click', function(){
                        planetContent.innerHTML = responseObject[i].overview.content;
                        planetImage.src = responseObject[i].images.planet;
                        //RETURN SOURCE LINK
                        overviewlink();
                    },false);
                    document.getElementById('structure-btn').addEventListener('click', function(){
                        planetContent.innerHTML = responseObject[i].structure.content;
                        planetImage.src = responseObject[i].images.internal;
                        //RETURN SOURCE LINK
                        structurelink();
                    },false);
                    document.getElementById('surface-btn').addEventListener('click', function(){
                        planetContent.innerHTML = responseObject[i].geology.content;
                        planetImage.src = responseObject[i].images.geology;
                        //RETURN SOURCE LINK
                        geologylink();
                    },false);


                    //return i for the preceeding event listeners
                    return i;

                } else {
                    //console.log('Oops, no matching planet info here.')
                }

            }

            //LINK BUILDERS
            function overviewlink() {
                for( var i = 0; i <responseObject.length; i++){
                    if (selectedPlanet === responseObject[i].name) {
                        planetSource.setAttribute('href', responseObject[i].overview.source)
                    }
                }
            };
            function structurelink() {
                for( var i = 0; i <responseObject.length; i++){
                    if (selectedPlanet === responseObject[i].name) {
                        planetSource.setAttribute('href', responseObject[i].structure.source)
                    }
                }
            };
            function geologylink() {
                for( var i = 0; i <responseObject.length; i++){
                    if (selectedPlanet === responseObject[i].name) {
                        planetSource.setAttribute('href', responseObject[i].geology.source)
                    }
                }
            };

        }, false);

        //Initially set to Earth Details
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