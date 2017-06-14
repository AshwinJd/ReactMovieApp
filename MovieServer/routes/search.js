var express = require('express');
var router = express.Router();
var data = require('../data.json');
/* GET users listing. */


// console.log(data);
router.get('/:name', function(req, res, next) {
  var name = (req.params.name).trim();
  name = name.toLowerCase();
  var reg = new RegExp(name);
  //console.log(name);
  var set = [];
  var list = data.map(function(item){
    let temp;
    temp = item.movie_name.trim();
    console.log(item);
    if((reg.test(temp.toLowerCase()))==true){
      set.push(item);
    }
    return set;

  })

  res.send(set);
});

module.exports = router;
