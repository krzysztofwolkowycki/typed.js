const spanText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint porro nam id magnam atque, earum adipisci suscipit nostrum? Possimus dolor sit eos odio! Animi repellat aperiam tempore cumque accusamus.';

let indexText = 0;

const addLetter = () =>{
    spanText.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length) clearInterval(indexText);
}

const indexTyping = setInterval(addLetter, 50);