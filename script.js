
let selected = document.getElementsByClassName('selected')[0]

let color = window.getComputedStyle( selected).getPropertyValue('background-color');
console.log(color)

let pixels = document.getElementById('pixel-board').children

for(let pixel of pixels){
   
    pixel.addEventListener('click',function(event){
        event.target.style.backgroundColor = color;
    });

}