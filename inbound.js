var dnsd = require('dnsd');

var server = dnsd.createServer(handler);
server.zone('mattjay.com', 'ec2-50-17-47-157.compute-1.amazonaws.com', 'matt@mattjay.com', 'now', '2h', '30m', '2w', '10m')
.listen(53, '127.0.0.1');
console.log('Server running at 127.0.0.1:53');

function handler (req, res) {
  console.log('%s:%s/%s %j', req.connection.remoteAddress, req.connection.remotePort, req.connection.type, req);
 
  var question = res.question[0], 
      hostname = question.name; 

  if (question.type == 'A') {
    res.answer.push({name:hostname, type:'A', data:"ProxyLB-1-1731372181.us-east-1.elb.amazonaws.com"});
  }
  res.end();
}
