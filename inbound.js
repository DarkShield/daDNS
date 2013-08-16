var dnsd = require('dnsd');

var server = dnsd.createServer(handler);
server.zone('mattjay.com', 'ns1.vicetek.com', 'matt@mattjay.com', 'now', '2h', '30m', '2w', '10m')
.listen(53);
console.log('Server running at 127.0.0.1:53');

function handler (req, res) {
  console.log('%s:%s/%s %j', req.connection.remoteAddress, req.connection.remotePort, req.connection.type, req);
 
  var question = res.question[0]; 
  if (question) {
    var  hostname = question.name; 
    if (hostname == 'mattjay.com' || 'www.mattjay.com') {
      if (question.type == 'A'){// && (hostname == 'mattjay.com' || 'www.mattjay.com')){
        res.answer.push({name:hostname, type:'A', data:"184.73.162.139"});
      }
      if (question.type == 'MX') {
        res.answer.push({name:hostname, type:'MX', data:[10, 'mail.mattjay.com']});
      }
    }
    if (hostname == 'mail.mattjay.com') {
      res.answer.push({name:hostname, type: 'A', data:'66.147.244.213'});
    }
    
    if (hostname == 'dashboard.vicetek.com') {
      res.answer.push({name:hostname, type: 'A', data: '184.73.162.139'});
    }

    res.end();
  }
  else {
    console.log('question undefined');
  }
}
