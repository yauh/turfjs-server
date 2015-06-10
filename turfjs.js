if (Meteor.isServer){
  turf = Npm.require('turf');
}
else {
  turf = this.turf;
  try {
    delete this.turf;
  } catch (e) {
  }
}
