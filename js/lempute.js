var lemposbusena = true;
function toggleLempute() {
    let img = document.getElementById();
    img.src = '../img/lempute_off.png';

    if (lemposbusena) {
        keistiAtributus(img, 'off')
        '../img/lempute_off.png';
    } else {
        keistiAtributus(img, 'on')
        '../img/lempute_on.png';
    }

    lemposbusena = !lemposbusena
}

function keistiAtributus(img, param)
{
    img.src = '../img/lempute_off.png' + param + '.png';

    let alt = 'lempute ' + param;
    img.setAttribute("alt", alt)
}