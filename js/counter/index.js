
// variables

const countEl = getElement('count')
const incBtn = getElement('inc')
const decBtn = getElement('dec')
const resetBtn = getElement('reset')
let count = 0;


// reusable functions

function getElement(id){
    return document.getElementById(id)
}



// event listners

incBtn.addEventListener('click', () => {
    count ++;
    countEl.innerText = count
})


decBtn.addEventListener('click', () => {
    count --;
    countEl.innerText = count
})


resetBtn.addEventListener('click', () => {
    count  = 0;
    countEl.textContent = count
})



