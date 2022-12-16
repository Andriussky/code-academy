function pakeistiTaba (id) {
    $('.sheets > div').hide();
    $(id).show();
}

$('.tabai > a').click(function(e){
    pakeistiTaba($(this).attr('href'));
    e.preventDefault()
});
