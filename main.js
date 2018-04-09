var i = 0;
var $name = document.querySelector("#name");
var text = $name.innerText;
var speedRange = [200, 300];

$name.innerHTML = '';
writeLetter();

function getSpeed() {
    return speedRange[0] + (Math.random() * (speedRange[1] - speedRange[0]));
}

function writeLetter(){
    $name.innerHTML += text[i];
    i++;

    if(i < text.length){
        setTimeout(writeLetter, getSpeed());

    }
}