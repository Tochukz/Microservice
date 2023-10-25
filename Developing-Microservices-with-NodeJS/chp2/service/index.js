const seneca = require('seneca')();

seneca.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
  const sum = msg.left + msg.right;
  respond(null, {answer: sum});
});

seneca.add({role: 'math', cmd: 'product'}, (msg, respond) => {
  var product = msg.left * msg.right;
  respond(null, {answer: product});
});

seneca.act({role: 'math', cmd: 'sum', left: 1, right: 2}, (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});

seneca.act({role: 'math', cmd: 'product', left: 3, right: 4}, console.log);
