var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);

    var marker = L.marker ([29.8884, -97.9384]).addTo(map);
      var center = turf.point([-97.9384, 29.8884]);
      var radius = 20;
      var bearing1 = 0;
      var bearing2 = 80;
      var sector = turf.sector(center, radius, bearing1, bearing2);

L.geoJson(sector, {color: "red", fillColor: '#0000FF'}).addTo(map);
