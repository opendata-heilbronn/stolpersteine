var markers = [];
var map = L.map('map', {closePopupOnClick: false}).setView([49.1426929, 9.210878999999977], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/">OSM</a>',
    minZoom: 10
}).addTo(map);

coordinates.forEach(function (entry) {
      markers.push(L.marker([entry.x, entry.y])
      .addTo(map));
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

    function hideList(){
        $('#list-id').hide();
        $('#map').show();
        $('.map-btn').addClass('disabled');
    };
    function hideMap(){
        $('#map').hide();
        $('#list-id').show();
        $('.list-btn').addClass('disabled');
        
    };