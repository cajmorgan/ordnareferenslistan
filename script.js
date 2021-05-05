const genButton = document.querySelector('.generate');

function toArrSort() {
    let getText = document.querySelector('#getText').value;
    toArray = getText.split('\n');
    toArray.sort();
    let toString = toArray.join('\n\n');

    document.querySelector('#getText').value = `${toString}`;
}
genButton.addEventListener('click', toArrSort);








