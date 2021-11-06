const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint porro nam id magnam atque, earum adipisci suscipit nostrum? Possimus dolor sit eos odio! Animi repellat aperiam tempore cumque accusamus.'

let indexText = 0;
const time = 40;
const addLetter = () =>{
    spnText.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length) clearInterval(indexTyping);
}
const cursorAnimate = ()=>{
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimate, 400)

