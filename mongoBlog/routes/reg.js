var express = require('express');
var router = express.Router();

/* GET reg page. */
router.get('/', function(req, res) {
  res.render('reg', {title:'注册'});
});

router.post('/',function(req,res){
  
});

module.exports = router;