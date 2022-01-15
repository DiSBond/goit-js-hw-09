

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
  if (counter <= 1) {
    refs.body.style.backgroundColor = randomColor();
  timer = setInterval(() => {
    refs.body.style.backgroundColor = randomColor();
  }, TIME);
    counter += 1;
    return console.log("started changing color");
  }
return console.log("second");
}

function stopBtnClick() {
  clearInterval(timer)
  counter = 0;
}

refs.startBtn.style.width = "300px";
refs.startBtn.style.height = "100px";


refs.stopBtn.style.width = "300px";
refs.stopBtn.style.height = "100px";



// 2