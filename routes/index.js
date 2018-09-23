var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search/:word', getSimWords)

function getSimWords(req, res, next) {
  const datamuse = require('datamuse');
  var data = req.params;
  var word = data.word;

  datamuse.request('words?ml='+word)
    .then((json) => {

    console.log(json);

    var reply;

    for(i=0; i <= 20; i++){
      if(json[i].tags[0]=='syn'){
        reply += json[i].word + " ";
      }
    }
          
    res.render('index', {title: "Lindsays App", initialWord: word, similarWords: reply});
      
      
  });


};

module.exports = router;
