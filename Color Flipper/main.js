console.log('Script Loaded!');

//get the button id.
var button= document.getElementById('changecolor');
var bgcolor = document.getElementById('bg');
var btcolor = document.getElementById('changecolor');
var hdcolor= document.getElementById('hdcolor');
var computedStyle = window.getComputedStyle(bg);




//add click event listener to the button.
button.addEventListener('click', () =>{
    function getRandomIntInclusive(min, max) {
        var ran= Math.floor(Math.random() * (max - min + 1) + min);
        return ran;
    }


    console.log(getRandomIntInclusive(0, 255));

    bg.style.backgroundColor = `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)})`;    
    btcolor.style.backgroundColor =  `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)})`;
    hdcolor.style.color = `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)})`;    
    btcolor.style.color =  `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)})`;
    
});

