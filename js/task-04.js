const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

let counterValue = 0;

function updateCounter() {
  counterValueSpan.textContent = counterValue;
}

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounter();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounter();
});

updateCounter();