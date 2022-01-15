
//refs
const notification = document.querySelector(".js-alert");

const delay = document.querySelector("input[name='delay']");
const step = document.querySelector("input[name='step']");
const amount = document.querySelector("input[name='amount']");

const button = document.querySelector("button");

// lets and const 
let position = 0;

//listeners
button.addEventListener("click", onClickBtn);



function onClickBtn(e) {
  e.preventDefault();

  let numberDelay = Number(delay.value);
  let numberAmount = Number(amount.value);
  let numberStep = Number(step.value);  

  setTimeout(() => {
    const interval = setInterval(() => {

    if (position >= numberAmount) {
    console.log("stop function");
    return clearInterval(interval)
    }
    
    position += 1;
    console.log("starting function");

    createPromise(position, numberDelay)
  .then(({ position, numberDelay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${numberDelay}ms`);
  })
  .catch(({ position, numberDelay }) => {
    console.log(`❌ Rejected promise ${position} in ${numberDelay}ms`);
  });
 
  }, numberStep);
   
 }, numberDelay);
  
}

function createPromise(position, numberDelay) {

  const promise = new Promise((resolve, reject) => {

  const shouldResolve = Math.random() > 0.3;
    
  if (shouldResolve) {
    resolve({position, numberDelay})
  } else {
    reject({position, numberDelay})
  }
  })

  return promise
}
