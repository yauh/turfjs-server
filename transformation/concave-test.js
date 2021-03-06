Tinytest.add('transformation - concave', function (test) {
  var points = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.601226, 44.642643]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.591442, 44.651436]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.580799, 44.648749]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.573589, 44.641788]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.587665, 44.64533]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.595218, 44.64765]
      }
    }]
  };

  var result = turf.concave(points, 1, 'miles');
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-63.591442, 44.651436],
          [-63.580799, 44.648749],
          [-63.573589, 44.641788],
          [-63.587665, 44.64533],
          [-63.601226, 44.642643],
          [-63.591442, 44.651436]
        ]
      ]
    },
    "properties": {}
  };
  // TODO: Test broken, fix it!
  //  test.equal(result, expected);
});