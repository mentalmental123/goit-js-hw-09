function e(e,o,t){return new Promise(((n,m)=>{setTimeout((()=>{const l=Math.random()>.3;let i=t+o*e;l?n({position:e,delayTime:i}):m({position:e,delayTime:i})}),t+o*e)}))}const o={firstDelay:document.querySelector('[name="delay"]'),stepDelay:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),form:document.querySelector(".form")};o.form.addEventListener("submit",(function(t){t.preventDefault();const n=Number(o.firstDelay.value),m=Number(o.stepDelay.value),l=Number(o.amount.value);for(let o=0;o<l;o++)e(o,m,n).then((({position:e,delayTime:o})=>console.log(`✅ Fulfilled promise ${e+1} in ${o}ms`))).catch((({position:e,delayTime:o})=>console.log(`❌ Rejected promise ${e+1} in ${o}ms`)))}));
//# sourceMappingURL=03-promises.9485c479.js.map