var dnsd = require('dnsd');

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
      res.answer.push({name: hostname, type: 'A', data: '54.148.2.201'});
    }

    if (hostname == 'collector.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.140'});
    }
    if (hostname == 'collector-1.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.145'});
    }
    if (hostname == 'collector-2.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.146'});
    }
    if (hostname == 'collector-3.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.147'});
    }
    if (hostname == 'collector-4.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.148'});
    }
    if (hostname == 'collector-5.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.149'});
    }
    if (hostname == 'collector-6.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.150'});
    }
    if (hostname == 'collector-7.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.151'});
    }
    if (hostname == 'collector-8.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.152'});
    }
    if (hostname == 'collector-9.newrelic.com') {
      res.answer.push({name: hostname, type: 'A', data: '50.31.164.153'});
    }

    res.end();
  }
  else {
    console.log('question undefined');
  }
}

