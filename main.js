var speedRange = [100, 200];
var typingElems = document.querySelectorAll('.typing-container__text');

for (var i = 0; i < typingElems.length; i++) {
    initTyping(typingElems[i]);
}

function initTyping(elem) {
    var i = 0;
    var text = elem.innerText;

    elem.innerHTML = '';

    function writeLetter() {
        elem.innerHTML += text[i];
        i++;

        if (i < text.length) {
            setTimeout(writeLetter, getSpeed());
        }
    }

    writeLetter();
}

function getSpeed() {
    return speedRange[0] + (Math.random() * (speedRange[1] - speedRange[0]));
}