console.log('Scripted Loaded');
var count= 0;
var value = document.querySelector('#value');
// console.log(value.textContent);

var btns= document.querySelectorAll(".btn");
// console.log(btns);


btns.forEach(function (btn){
    btn.addEventListener('click' ,function(e){
        const style = e.currentTarget.classList;
        
        if(style.contains('increase')){
            count++;
            console.log(count)
        }
        else if(style.contains('decrease')){
            count--;
            console.log(count)
            if(count<0){
                count = 0;
                // value.textContent=0;
            }
        }
        else{    
            count = 0;
            console.log(count)
        
        }
        value.textContent = count;
    })
});



