$("form").bind("keypress", function (a) { return 13 == a.keyCode ? !1 : void 0 });

var options = {
    valueNames: ['names', 'address'],
    fuzzySearch: {
        searchClass: "fuzzy-search",
        location: 0,
        distance: 100,
        threshold: 0.4,
        multiSearch: true
    }
};

var listObj = new List('list-id', options);
var initialized = false;

function showMap() {
    $('#list-id').hide();
    $('#map').show();
    if (initialized == false) {
        var map = L.map('map', { closePopupOnClick: false }).setView(map_coord, 13);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/">OSM</a>',
            minZoom: 10
        }).addTo(map);

        L.control.fullscreen({
            position: 'topleft'
        }).addTo(map);

        var markers = L.markerClusterGroup({
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true
        });
        coordinates.forEach(function (a) {
            markers.addLayer(L.marker([a.x, a.y]).on("click", function () {
                document.location = a.url
            }).on("mouseover", function (e) {
                this.bindPopup(a.title, { closeButton: false }).openPopup();
            }).on('mouseout', function (e) {
                this.closePopup();
            }));
        });
        map.addLayer(markers);

        initialized = true;
    }
};
function showList() {
    $('#map').hide();
    $('#list-id').show();
};