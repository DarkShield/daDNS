var dns = require('dns');

module.exports = {
  newrelic : newrelicLookup,
  isNewRelicCollector: isNewRelicCollector
};

function isNewRelicCollector (hostname){
  var domainRegex = /^.*\.newrelic\.com$/;
  return (domainRegex.test(hostname));
}

function newrelicLookup (hostname, callback){
  dns.resolve(hostname, callback)
}