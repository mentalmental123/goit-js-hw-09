!function(){function e(e,n,o){return new Promise((function(t,r){setTimeout((function(){var a=Math.random()>.3,u=o+n*e;a?t({position:e,delayTime:u}):r({position:e,delayTime:u})}),o+n*e)}))}var n={firstDelay:document.querySelector('[name="delay"]'),stepDelay:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),form:document.querySelector(".form")};n.form.addEventListener("submit",(function(o){o.preventDefault();for(var t=Number(n.firstDelay.value),r=Number(n.stepDelay.value),a=Number(n.amount.value),u=0;u<a;u++)e(u,r,t).then((function(e){var n=e.position,o=e.delayTime;return console.log("✅ Fulfilled promise ".concat(n+1," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delayTime;return console.log("❌ Rejected promise ".concat(n+1," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.16466107.js.map