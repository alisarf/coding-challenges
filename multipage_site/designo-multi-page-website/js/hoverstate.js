var tridesign = document.querySelectorAll('.tridesign-content');
console.log('hello world')

tridesign.forEach(function (section) {
    section.addEventListener('mouseover', () => {
        console.log(section);

        var tochange = section.parentNode.querySelector('.tridesign-hover-state');
        console.log(tochange);
        tochange.setAttribute('style','background-color: #E7816B;');
    })
    section.addEventListener('mouseout', () => {
        console.log(section);

        var tochange = section.parentNode.querySelector('.tridesign-hover-state');
        console.log(tochange);
        tochange.setAttribute('style','background-color: transparent;');
    })
  });



//link redirect 
