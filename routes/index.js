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
    // var parsedSimWord = JSON.parse(json)

    for(i=0; i <= 30; i++){
      reply += json[i].word + " ";
    }
      
    // response.json(reply) 
    
    
    res.render('index', {title: "Lindsays App", initialWord: word, similarWords: reply});
      
      
  });


  // res.render('index', { title: word });
};



module.exports = router;
