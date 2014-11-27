var dnsd = require('dnsd');
var lookups = require('./outbound/lookups');
var server = dnsd.createServer(handler);

server.zone('mattjay.com', 'ns1.vicetek.com', 'matt@mattjay.com', 'now', '2h', '30m', '2w', '10m')
.listen(53);
console.log('Server running at 127.0.0.1:53');

function handler (req, res) {
  console.log('%s:%s/%s %j', req.connection.remoteAddress, req.connection.remotePort, req.connection.type, req);

  var question = res.question[0];

  if (question) {
    var hostname = question.name;
    if (hostname == 'mattjay.com' || hostname == 'www.mattjay.com') {
      if (question.type == 'A') {
        res.answer.push({name:hostname, type:'A', data:"66.147.244.213"});
      }
    }

    if (hostname == 'strider.vicetek.com') {
      res.answer.push({name:hostname, type: 'A', data: '10.241.81.61'});
    }
    
    if (hostname == 'dashboard.vicetek.com') {
      res.answer.push({name:hostname, type: 'A', data: '54.221.226.142'});
    }

    if (hostname == 'urbanhydro.org' || hostname == 'www.urbanhydro.org') {
      res.answer.push({name:hostname, type: 'A', data: '184.168.136.128'});
    }

    if (hostname == 'supercroppers.com' || hostname == 'www.supercroppers.com') {
      res.answer.push({name:hostname, type: 'A', data: '192.254.233.219'});
    }

    if (hostname == 'darkshield.io' || hostname == 'www.darkshield.io') {
      res.answer.push({name: hostname, type: 'A', data: '54.221.245.88'});
    }

    if (hostname == 'dashboard.darkshield.io') {
      res.answer.push({name: hostname, type: 'A', data: '54.221.226.142'})
    }

    if (hostname == 'edbellis.com' || hostname == 'www.edbellis.com') {
      res.answer.push({name: hostname, type: 'A', data: '192.0.80.250'})
    }

    if (hostname == 'blog.risk.io' || hostname == 'blog.riskio.com') {
      console.log('yep');
      res.answer.push({name: hostname, type: 'A', data: '54.148.2.201'});
    }
    if (lookups.isNewRelicCollector(hostname)){
      lookups.newrelic(hostname, function(err, addresses){
        if(!err){
          res.answer.push({name:hostname, type: 'A', data: addresses[0]});
        }else{
          console.log('DNS Lookup Error: ' + hostname);
        }
        res.end()
      });
    }else{
      res.end();
    }
  }
  else {
    console.log('question undefined');
  }
}
