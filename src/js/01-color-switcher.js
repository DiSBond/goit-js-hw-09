

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("button[data-start]"),
  stopBtn: document.querySelector("button[data-stop]")
}

let timer = null;
let counter = 1;

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const TIME = 1000;

refs.startBtn.addEventListener('click', startBtnClick)
refs.stopBtn.addEventListener('click', stopBtnClick)

function startBtnClick() {
  refs.startBtn.disabled = true;
    refs.body.style.backgroundColor = randomColor();
  timer = setInterval(() => {
    refs.body.style.backgroundColor = randomColor();
  }, TIME);

  

}

function stopBtnClick() {
  clearInterval(timer)
  refs.startBtn.disabled = false;
}

refs.startBtn.style.width = "300px";
refs.startBtn.style.height = "100px";


refs.stopBtn.style.width = "300px";
refs.stopBtn.style.height = "100px";



// 2