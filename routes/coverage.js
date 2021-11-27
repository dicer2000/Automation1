var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.send('c respond with a resource');
//  console.log('in coverage');
  res.sendFile('/Users/brett/Documents/Summertime/Clients/Principia/310-SoftwareEngineering/Docs/Automation/coverage/lcov-report/index.html', { title: 'Coverage' });
});
// /Users/brett/Documents/Summertime/Clients/Principia/310-SoftwareEngineering/Docs/Automation/coverage/lcov-report/index.html
module.exports = router;
