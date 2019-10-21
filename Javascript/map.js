var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);

    //max's turf.org voronoi example
        var options = {
          bbox: [-98.573, 30.641, -98.563, 30.651]
        };

        var points = turf.featureCollection([


        turf.point( [-98.56546735391021,30.649278787896037]),
        turf.point( [-98.56899152509868,30.64577842131257]),
        turf.point( [-98.56589701026678,30.64970651641488]),
        turf.point( [-98.56591201387346,30.648694401606917]),
        turf.point( [-98.56765662319958,30.64182593487203]),
        turf.point( [-98.56627729721367,30.64167480915785]),
        turf.point( [-98.56781009584665,30.644342601299286]),
        turf.point( [-98.56902262195945,30.64480603672564]),
        turf.point( [-98.57225879095495,30.645415568724275]),
        turf.point( [-98.57169711962342,30.64489438198507]),
        turf.point( [-98.57101868838072,30.647981939837337]),
        turf.point( [-98.56515454128385,30.64842131920159]),
        turf.point( [-98.57034151442349,30.64712069928646]),
        turf.point( [-98.56380706652999,30.64490812830627]),
        turf.point( [-98.5676622390747,30.648796912282705]),
        turf.point( [-98.56670200824738,30.648750560358167]),
        turf.point( [-98.56937508098781,30.648176316171885]),
        turf.point( [-98.56811829842627,30.6482704449445]),
        turf.point( [-98.56736795045435,30.64799878746271]),
        turf.point( [-98.56642850674689,30.648024855181575]),
        turf.point( [-98.56804260984063,30.645200740545988])
        ]);

        var voronoiPolygons = turf.voronoi(points, options);
        L.geoJson(voronoiPolygons, {color: "red", fillColor: '#0000FF'}).addTo(map);

        var centerPoint = turf.center(points);

        L.geoJson(centerPoint, {color: "blue"}).addTo(map);


            var marker = L.marker ([29.8884, -97.9384]).addTo(map);
              var center = turf.point([-97.9384, 29.8884]);
              var radius = 20;
              var bearing1 = 0;
              var bearing2 = 80;
              var sector = turf.sector(center, radius, bearing1, bearing2);

        L.geoJson(sector, {color: "red", fillColor: '#0000FF'}).addTo(map);
