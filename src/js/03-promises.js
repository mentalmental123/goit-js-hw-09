function createPromise(position, delay, firstDelay) {
    let delayTimer = firstDelay + delay * position;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      let delayTime = firstDelay + delay * position;
       if (shouldResolve) {
         resolve({ position, delayTime})
       } else {
        reject({position, delayTime})
       }
      
    }, firstDelay + delay * position)
  })
}

const refs = {
  firstDelay: document.querySelector('[name="delay"]'),
  stepDelay: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  form : document.querySelector('.form')
}

refs.form.addEventListener('submit', createPromises)

function createPromises(evt) {
  evt.preventDefault();

  const firstDelay = Number(refs.firstDelay.value);
  const stepDelay = Number(refs.stepDelay.value);
  const amount = Number(refs.amount.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i, stepDelay, firstDelay).then(({ position, delayTime  }) => console.log(`✅ Fulfilled promise ${position+1} in ${delayTime}ms`)).catch(({ position, delayTime }) => console.log(`❌ Rejected promise ${position+1} in ${delayTime}ms`));
  }

}
