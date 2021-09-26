var paragraph, author;

//capture the elements
paragraph = document.getElementById('quote-refresh-paragraph');
author = document.getElementById('quote-refresh-author');
//listen for refresh click
document.getElementById('quote-refresh-icon').addEventListener('click', getQuote , false);

//create call request
function getQuote () {
    $.getJSON('https://api.quotable.io/random', function (data) {
    console.log(`${data.content} —${data.author}`)
    paragraph.innerHTML = ("\"" + data.content + "\"");
    author.innerHTML = (data.author);
    })
};
//Call initially on load
$(document).ready(
    getQuote()
);