$(function ()
{
    let elementas = $('#demo')

    elementas.hide();

    let m1 = $('body > button:first-of-type');


    m1.click(function () {
        elementas.slideToggle(3000);
    });

})

// function rodyti() {
//     document.getElementById('demo').style.display = 'block';
// }


// let element = document.querySelector('body > button:last-of-type')
// element.addEventListener()

// toggle vietoj hide slidetoggle(5000)