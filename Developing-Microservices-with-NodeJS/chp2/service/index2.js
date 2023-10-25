const seneca = require('seneca')();

seneca.add({ cmd: 'wordcount' }, function(msg, respond) {
  const count = msg.phrase.split(' ').length;
  respond(null, {words: count})
});
seneca.add({ cmd: 'wordcount', skipShort: true}, function(msg, respond) {
  const words = msg.phrase.split(' ');
  let count = 0;
  for(let word of words) {
    if (word.length > 3) {
        count++;
    }
  }
  respond(null, { words: count});
})

seneca.act({ cmd: 'wordcount', phrase: 'What is successful developer!'}, function(err, response) {
  if (err) {
    return console.error(err);
  }
  console.log(response);
});
seneca.act({ cmd: 'wordcount', skipShort: true,  phrase: 'What is successful developer!'}, function (err, response) {
    if (err) {
      return console.error(err);
    };
    console.log(response);
});
