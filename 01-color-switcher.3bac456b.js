!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),BODY:document.querySelector("body")};t.stop.disabled=!0,t.start.addEventListener("click",(function(e){function a(){t.BODY.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.stop.disabled=!1,t.start.disabled=!0,a();setInterval(a,1e3)})),t.stop.addEventListener("click",(function(e){t.stop.disabled=!0,t.start.disabled=!1,clearInterval(colorTimer)}))}();
//# sourceMappingURL=01-color-switcher.3bac456b.js.map
