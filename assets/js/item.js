var $player = $(".audio-ctrl");
$(".audio-ctrl").each(function () {
    $(this).attr("aria-pressed", "false");
    $(this).click(function (e) {
        e.preventDefault();
        $player.attr("aria-pressed", "false");
        if ($(this).hasClass("play")) {
            $(this).attr("aria-pressed", "true");
            // 2 sec delay to allow screen reader
            // to read button state
            setTimeout(function () {
                $("#player")[0].play();
            }, 2000);
        }
        if ($(this).hasClass("pause")) {
            $("#player")[0].pause();
            $(this).attr("aria-pressed", "true");
        }
    });
});

var map = L.map('map', { closePopupOnClick: false }).setView([place.x, place.y], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/">OSM</a>',
    minZoom: 10
}).addTo(map);

L.control.fullscreen({
    position: 'topleft'
}).addTo(map);
var marker = L.marker([place.x, place.y]).addTo(map).bindPopup(place.title + "<br>" + place.address, { closeButton: false, closePopupOnClick: false }).openPopup();