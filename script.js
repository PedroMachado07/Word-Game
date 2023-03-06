let letters = document.querySelectorAll('.scoreboard-letter');
let loading = document.getElementsByClassName('.info-bar');

async function init(){


document.addEventListener("keydown", function handleKeyPress(event){
    const action = event.key;

    console.log(action);

    if(action === 'Enter'){
        commit();
    } else if(action === 'Backspace'){
        backspace();
    } else if(isLetter(action)){
        addLetter(action.toUpperCase())
    }else{
        //do nothing
    }
});
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }

init();