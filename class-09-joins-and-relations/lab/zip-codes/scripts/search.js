(function(module) {

  // TODID: Write the code to populate your filters, and enable the search queries here in search.js
  // TODID: You will also interact with the map.js file here
  function Search() { }

  function setupZipSearch() {
    $('form').on('submit', function(e) {
      e.preventDefault();
      if ($('input[name=zip]').val()) {
        initMap();
      }
    });
  }

  function setupStates() {
    webDB.execute([{
      'sql': 'SELECT DISTINCT state FROM zips ORDER BY state'
    }], function(result) {
      var states = result.map(function(obj) {
        return obj.state;
      });
      states.filter(function(curr, i) {
        return states.indexOf(curr) == i;
      }).forEach(function(curr) {
        $('#state-select').append('<option>' + curr + '</option>');
      });
    });
    $('#state-select').on('change', function() {
      webDB.execute([{
        'sql': 'SELECT DISTINCT city,latitude,longitude FROM zips WHERE state=? ORDER BY city',
        'data': [$('#state-select').val()]
      }], function(result) {
        var cities = result.map(function(obj) {
          return obj.city;
        })
        cities.filter(function(curr, i) {
          return cities.indexOf(curr) == i;
        }).forEach(function(curr) {
          $('#city-select').append('<option>' + curr + '</option>');
        });
      });
    });
    $('#city-select').on('change', function() {
      initMap($('#state-select').val(), $('#city-select').val());
    });
  }

  Search.initAll = function() {
    setupZipSearch();
    setupStates();
  }

  module.Search = Search;
})(window)
