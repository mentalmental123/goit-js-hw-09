
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    start : document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    BODY: document.querySelector('body'),
    
    
}

    refs.stop.disabled = true;


refs.start.addEventListener('click', colorized)

function colorized(evt) {
    refs.stop.disabled = false;
    refs.start.disabled = true;
    function colorTime() {
        refs.BODY.style.backgroundColor = getRandomHexColor();    
    }
    colorTime();
    const colorTimer = setInterval(colorTime, 1000);
}

refs.stop.addEventListener('click', stopColorized);

function stopColorized(evt) {
    refs.stop.disabled = true;
    refs.start.disabled = false;
    clearInterval(colorTimer);

}