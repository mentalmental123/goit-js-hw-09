
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    start : document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    BODY: document.querySelector('body'),
}

    refs.stop.disabled = true;
    let colorTimer = null;

refs.start.addEventListener('click', colorized)

function colorized(evt) {
    refs.stop.disabled = false;
    refs.start.disabled = true;
    
    colorTime();
    colorTimer = setInterval(colorTime, 1000);
    function colorTime() {
        refs.BODY.style.backgroundColor = getRandomHexColor();    
    }
}

// hello world

refs.stop.addEventListener('click', stopColorized);

function stopColorized(evt) {
    refs.stop.disabled = true;
    refs.start.disabled = false;
    clearInterval(colorTimer);

}