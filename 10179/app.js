console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  return '$' + (parseFloat(e) * 0.8).toFixed(2);
}).join('\n'));
