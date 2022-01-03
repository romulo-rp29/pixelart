
let selectedOnLoad = document.getElementsByClassName('selected')[0]

let paint = window.getComputedStyle(selectedOnLoad).getPropertyValue('background-color');

let pixels = document.getElementById('pixel-board').children

for (let pixel of pixels) {
   
    pixel.addEventListener('click',function(event){
        event.target.style.backgroundColor = paint;
    });

}

let colors = document.getElementById('color-palette').children
let black = document.getElementsByClassName('black')[0]
let pink = document.getElementsByClassName('pink')[0]
let red = document.getElementsByClassName('red')[0]
let blue = document.getElementsByClassName('blue')[0]

for (let color of colors) {
   
    color.addEventListener('click',function(event){
        if (event.target == pink) {
            selected = pink
            event.target.classList.add('selected')
            document.getElementsByClassName('black')[0].classList.remove('selected')
            document.getElementsByClassName('red')[0].classList.remove('selected')
            document.getElementsByClassName('blue')[0].classList.remove('selected')
            paint = window.getComputedStyle(selected).getPropertyValue('background-color');
        }
        if (event.target == red) {
            selected = red
            event.target.classList.add('selected')
            document.getElementsByClassName('black')[0].classList.remove('selected')
            document.getElementsByClassName('pink')[0].classList.remove('selected')
            document.getElementsByClassName('blue')[0].classList.remove('selected')
            paint = window.getComputedStyle(selected).getPropertyValue('background-color');
        }
        if (event.target == blue) {
            selected = blue
            event.target.classList.add('selected')
            document.getElementsByClassName('black')[0].classList.remove('selected')
            document.getElementsByClassName('red')[0].classList.remove('selected')
            document.getElementsByClassName('pink')[0].classList.remove('selected')
            paint = window.getComputedStyle(selected).getPropertyValue('background-color');
        }
        if (event.target == black) {
            selected = black
            event.target.classList.add('selected')
            document.getElementsByClassName('pink')[0].classList.remove('selected')
            document.getElementsByClassName('red')[0].classList.remove('selected')
            document.getElementsByClassName('blue')[0].classList.remove('selected')
            paint = window.getComputedStyle(selected).getPropertyValue('background-color');
        }
        console.log(document.getElementsByClassName('black')[0])
        console.log(document.getElementsByClassName('pink')[0])
        console.log(document.getElementsByClassName('red')[0])
        console.log(document.getElementsByClassName('blue')[0])
    });

}

// event.target.classList.add('selected')
// selected.classList.remove('selected')

