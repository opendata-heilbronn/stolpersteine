var markers = [];
var map = L.map('map', { closePopupOnClick: false }).setView([49.1426929, 9.210878999999977], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/">OSM</a>',
    minZoom: 10
}).addTo(map);
coordinates.forEach(function (a) {
    markers.push(L.marker([a.x, a.y]).addTo(map).on("click", function () {
        document.location = a.url
    }).bindPopup(a.title, { autoClose: !1, closeButton: !1 }).openPopup())
});

L.control.fullscreen({
    position: 'topleft'
}).addTo(map);

var options = {
    valueNames: ['item-title', 'item-content'],
    fuzzySearch: {
        searchClass: "fuzzy-search",
        location: 0,
        distance: 100,
        threshold: 0.4,
        multiSearch: true
    }
};

var listObj = new List('list-id', options);

function hideList() {
    $('#list-id').hide();
    $('#map').show();
    $('.map-btn').addClass('disabled');
};
function hideMap() {
    $('#map').hide();
    $('#list-id').show();
    $('.list-btn').addClass('disabled');

};
coordinates.forEach(function (a) {
    markers.push(L.marker([a.x, a.y]).addTo(map).on("click", function () {
        document.location = a.url
    }).bindPopup(a.title, { autoClose: !1, closeButton: !1 }).openPopup())
});
$("form").bind("keypress", function (a) { return 13 == a.keyCode ? !1 : void 0 });