const container = document.querySelector('.container');
const blockBtn = document.querySelectorAll('.btn');
const color = document.querySelector('.color');

console.log(color)
const width = 500;
const height = 600;

let userInput;
let numberOfBlocks;



function createBlock (e) {
  for (let i = 0 ; i < e; i++) {
    const flexDiv = document.createElement('div');
    flexDiv.classList.add('flexItem');
    flexDiv.style.width = `${500/userInput}px`;
    flexDiv.style.height = `${600/userInput}px`;
    flexDiv.addEventListener('mouseover',()=>{
      flexDiv.style.backgroundColor = color.value;
    })
    container.appendChild(flexDiv);
  }
}

blockBtn.forEach(btn => btn.addEventListener("click",(e)=>{
  container.innerHTML = "";
  userInput = parseInt(e.target.id);
  numberOfBlocks = userInput * userInput;
  createBlock(numberOfBlocks);

}))

