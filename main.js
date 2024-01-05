console.log("JS LOADED");

var toggle = document.querySelector('#menu-links');
var text = document.querySelector('#text');

var button = document.querySelector('#menu-btn');

button.addEventListener('click', function () {
    console.log(toggle.classList.toggle("unhide"));
});

