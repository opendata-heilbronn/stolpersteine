var map = L.map('map', { closePopupOnClick: false }).setView(map_coord, 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/">OSM</a>',
	minZoom: 12
}).addTo(map);

L.control.fullscreen({
	position: 'topleft'
}).addTo(map);

var markers = L.markerClusterGroup({
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: false,
	zoomToBoundsOnClick: true,
	maxClusterRadius: 30,
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