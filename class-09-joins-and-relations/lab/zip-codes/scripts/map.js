var map;

function initMap(state, city) {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.611435, lng: -122.330456},
    scrollwheel: true,
    zoom: 8
  });

  var zips = [];
  if ($('input[name=zip]').val()) {
    webDB.execute([{
      'sql': 'SELECT city,latitude,longitude FROM zips WHERE zip=?',
      'data': [ $('input[name=zip]').val() ]
    }], function(resultArray) {
      var markerLocations = resultArray.map(function(result) {
        return {
          lat: result.latitude,
          lng: result.longitude
        };
      });
      loadMarkers(markerLocations);
      $('form input[type=text]').val('');
    });
  }

  if (city && state) {
    webDB.execute([{
      'sql': 'SELECT latitude,longitude FROM zips WHERE city=? AND state=?',
      'data': [ city, state ]
    }], function(result) {
      var markerLocations = result.map(function(result) {
        return {
          lat: result.latitude,
          lng: result.longitude
        };
      });
      loadMarkers(markerLocations);
    });
  }

  // TODID: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.

}

function addMarker(location, label) {
  var marker = new google.maps.Marker({
    position: location,
    label: label
  });
  marker.setMap(map);
  map.setCenter(location);
}

function loadMarkers(locations, centerMap) {
  for (var i in locations) {
    addMarker(locations[i], i + 1);
  }
  if (centerMap)
    map.setCenter(centerMap);
  else
    map.setCenter(locations[0]);
}

Search.initAll();
