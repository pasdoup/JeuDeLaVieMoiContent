$('#Tab1').addClass("tabActive")

function generer(index) {
    $('.containerTab').each(function (i) { $(this).css("display", "none") })
    $('.tabClass').each(function (i) { $(this).removeClass("tabActive") })

    $('#containerTab' + index).css("display", "block")

    $('#Tab' + index).addClass("tabActive")

}