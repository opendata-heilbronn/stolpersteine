var markers = [];
var map = L.map('map').setView([49.14320088060194, 9.222818613052368], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/">OSM</a>',
    minZoom: 14,
}).addTo(map);
var icon = L.icon({
    iconUrl: 'images/marker.png',
    iconSize: [37, 37],
    iconAnchor: [18, 36]
});
L.popup({
    closeButton: false,
    closeOnClick: false,
    className: 'friedhof'
}).setLatLng([49.1518993, 9.2345265]).setContent('Jüdischer Friedhof').openOn(map);

var app = new Vue({
    el: '#app',
    data: {
        items: []
    },
    methods: {
        loadData: function () {
            this.$http.get('data.json').then((response) => {
                return response.json();
            }).then((json) => {
                var self = this;
                self.items = json.items;
                this.items.forEach(function (entry) {
                    markers.push(L.marker([entry.x, entry.y]).addTo(map).on('click', function (e) {
                          $('#modal').modal('open');
                    }));
                });
            });
        },
    }
});
app.loadData();