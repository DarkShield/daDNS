var lookups = require('../outbound/lookups');

describe('lookups.js', function(){

  describe('isNewRelicCollector', function (){

    it('should be a function', function(){
      expect(typeof lookups.isNewRelicCollector).toBe('function');
    });

    it('should return true if the host is on the newrelic domain', function(){
      var isNewRelicHost = lookups.isNewRelicCollector('www.newrelic.com');
      expect(isNewRelicHost).toBe(true);
    })

    it('should return false if the host is not on the rewrelic domain', function(){
      var isNewRelicHost = lookups.isNewRelicCollector('www.notnewrelic.com');
      expect(isNewRelicHost).toBe(false);
    });

    it('should return false if the host is not a subdomain of newrelic.com', function(){
      var isNewRelicHost = lookups.isNewRelicCollector('newrelic.com');
      expect(isNewRelicHost).toBe(false);
    });

    it('should return false if the host is not a subdomain of newrelic.com', function(){
      var isNewRelicHost = lookups.isNewRelicCollector('attacker.newrelic.com.attacker.com');
      expect(isNewRelicHost).toBe(false);
    });
  });
  describe('newrelicLookup', function(){

    it('should be a function', function(){
      expect(typeof lookups.newrelic).toBe('function');
    });
    it('',function(){
      lookups.newrelic('www.newrelic.com', function(err, answer){
        console.log(answer);
      })
    });
  });
});