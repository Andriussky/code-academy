let FotoElements = document.querySelectorAll('img')
let count = FotoElements.length;

console.log(count);


let uuid = document.getElementById('uuid');
let imgElements = uuid.getElementsByTagName('img');
let count1 = imgElements.length;

console.log('Paveiksliuku skaicius: ' + count);


let button = document.getElementById('Skaiciuoti paveikslelius');
button.addEventListener('Skaiciuoti paveikslelius', function() {
    onclick.window.alert(count);

});

