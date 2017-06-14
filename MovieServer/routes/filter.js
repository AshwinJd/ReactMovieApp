var express = require('express');
var router = express.Router();
var data = require('../data.json');

var temp = [...data];
// console.log(temp);
router.get('/:genre', function(req, res, next) {
  var genreSet = req.params.genre.split(',');
  // console.log(genreSet);
  var set = [];
  var d=0;
  var temp2 = [];
  var final = genreSet.map(function(item){
      temp2 = [];
    // console.log(item);
    var x =temp.map(function(e){
        var c =0;
        // console.log(e);
        e.movie_genre.map(function(ele){
          // console.log(ele);
          if(ele.toLowerCase().trim() == item.toLowerCase().trim())
            c=1;
        })
        if(c==1)
        {
          temp2.push(e);
          // console.log(e);
        }
    });
    // console.log(d++);
    temp = [...temp2];
  });
  console.log(temp);
  res.send(temp);
});


module.exports = router;
