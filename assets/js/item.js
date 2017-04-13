var map = L.map('map', { closePopupOnClick: false }).setView([place.x, place.y], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/">OSM</a>',
    minZoom: 10
}).addTo(map);

L.control.fullscreen({
    position: 'topleft'
}).addTo(map);
var marker = L.marker([place.x, place.y]).addTo(map).bindPopup(place.title, {closeButton: false, closePopupOnClick: false}).openPopup();