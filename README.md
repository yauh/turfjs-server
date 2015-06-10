# turfjs-server for Meteor
This package is a simple wrapper for<br>[turf](https://github.com/turfjs/turf). Manipulate GeoJSON objects,<br>similar to PostGIS.

Read <a href="https://www.mapbox.com/guides/intro-to-turf/">an introduction to turf.js and spatial<br>analysis</a>.

## Usage
Install the package via command line:

```
$ meteor add yauh:turfjs-server
```

**Note** `turf` is only available on the server, not on the client, even<br>though it could be used there as well.

The package introduces a new global called `turf` which knows these<br>methods. See [the official docs](http://turfjs.org/static/docs/) for the<br>correct syntax and parameters or check out the test files inside this<br>package.

### aggregation
- `turf.aggregate()`
- `turf.average()`
- `turf.count()`
- `turf.deviation()`
- `turf.max()`
- `turf.median()`
- `turf.min()`
- `turf.sum()`
- `turf.variance()`

### classification
- `turf.jenks()`
- `turf.quantile()`
- `turf.reclass()`

### data
- `turf.filter()`
- `turf.remove()`
- `turf.sample()`

### geometry
- `turf.featurecollection()`
- `turf.linestring()`
- `turf.point()`
- `turf.polygon()`

### interpolation
- `turf.isobands()`
- `turf.isolines()`
- `turf.planepoint()`
- `turf.tin()`

### grids
- `turf.hex-grid()`
- `turf.point-grid()`
- `turf.square-grid()`
- `turf.inside()`
- `turf.tag()`
- `turf.within()`

### measurement
- `turf.along()`
- `turf.area()`
- `turf.bbox-polygon()`
- `turf.bearing()`
- `turf.center()`
- `turf.centroid()`
- `turf.destination()`
- `turf.distance()`
- `turf.envelope()`
- `turf.extent()`
- `turf.line-distance()`
- `turf.midpoint()`
- `turf.nearest()`
- `turf.point-on-surface()`
- `turf.size()`
- `turf.square()`

### misc
- `turf.combine()`
- `turf.explode()`
- `turf.flip()`
- `turf.kinks()`

### transformation
- `turf.bezier()`
- `turf.buffer()`
- `turf.concave()`
- `turf.convex()`
- `turf.erase()`
- `turf.intersect()`
- `turf.merge()`
- `turf.simplify()`
- `turf.union()`