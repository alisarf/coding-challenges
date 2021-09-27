//DECLARE AND SET ELEMENTS
var hamburger = document.getElementById('hamburger');
var navigation = document.getElementById('planet-navigation');
var body = document.getElementsByName('body');
var navPlanet = document.getElementsByClassName('nav-planet');

//ADD EVENT LISTENER ON HAMBURGER CLICK
hamburger.addEventListener('click', function() {
    //TOGGLE SHOW CLASS
    navigation.classList.toggle('show');
    //REMOVE SHOW CLASS WHEN SELECTION MADE
    navigation.addEventListener('click', function() {
      navigation.classList.remove('show');
    });   
})