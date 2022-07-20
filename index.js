 const container = document.querySelector('.container')
 const btnBlack = document.createElement('button')
 const btnGray = document.createElement('button')
 const btnRGB = document.createElement('button')
 const btnSize = document.createElement('button')
 const buttonsContainer = document.querySelector('.buttons')

window.onload = () => {
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover', () =>{
        box.style.background = 'black';
    }))
}



 //to create a grid
 function createDivs (col, rows) {
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement('div')
       // div.style.border = '1px solid red'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;   
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`; 
        container.appendChild(div).classList.add('box')
    } 
 }
 createDivs(16, 16)

 //this allows the grid to turn gray when hovering over it
 function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click' , () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
         let Rnum = Math.floor(Math.random() * 255)
         box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
    //to appear on the screen
 }
 grayColor()

 function blackColor() {
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click' , () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
         
         box.style.background = 'black'
        }))
    })

    buttonsContainer.appendChild(btnBlack).classList.add('btn')
 }
 blackColor();

 function rgbColor() {
    const boxs = container.querySelectorAll('.box')
    btnRGB.textContent = 'Rainbow'
    btnRGB.addEventListener('click' , () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
         let R = Math.floor(Math.random() * 255);
         let G = Math.floor(Math.random() * 255);
         let B = Math.floor(Math.random() * 255);
         box.style.background = `rgb(${R},${G},${B})`;
        })) 
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}
rgbColor();

function reSet (){
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.remove());
}

function reSize() {
    btnSize.textContent = 'GRID SIZE';
    btnSize.addEventListener('click', () =>{
        let user = prompt('What size would you like?');
        if(user === null || user < 1){
            reSet();
            createDivs(16, 16);
            blackColor();
            grayColor();
            rgbColor();
        }
        else{
            reSet();
            createDivs(user, user);
            blackColor();
            grayColor();
            rgbColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}
reSize();

//this will creat animation in the background
function backgroundAnim() {
    let colors = ['pink', 'red', 'blue', 'purple'];
    const section = document.querySelector('.section');
    const span = document.createElement('span');

    let size = Math.random() * 50;

    span.style.width = 10 + size + 'px';
    span.style.height = 10 + size + 'px';
    span.style.borderRadius = `${size}%`;
    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    span.style.background = backgroundColor;
    section.appendChild(span);
    setTimeout(() =>{span.remove()}, 5000);
}

setInterval(backgroundAnim, 500);