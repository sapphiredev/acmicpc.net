c=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e){return e.toLowerCase().split('').filter(function(e,i,a){x=e.charCodeAt();return x>96&&x<123&&a.indexOf(e)==i}).length});c.pop();console.log(c.join('\n'))