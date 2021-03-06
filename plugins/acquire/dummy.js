//Expose `Plugin`
module.exports = AcquirePlugin;

//Initialize Plugin.

function AcquirePlugin() {
  this.info = {};
  this.info.slug = "dummy";
  this.info.name = "DUMMY API";
  //sound off!
  log.info("Plugin " + this.info.slug + " (" + this.info.name + ") initialized!");
};


//Search prototype

var acquire = AcquirePlugin.prototype;

acquire.findShowURLs = Promise.coroutine(function* (name, episode) {
  var results = {};
  var results.results = [];
  var results.suggestions = [];
  var result = {
    name: "Dummy Show",
    link: "http://this.is.a.dummy.show.com"
  };
  results.suggestions.push(result);
  return results;
});
