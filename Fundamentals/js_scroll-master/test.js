var words = ["fun"];
  //el = document.getElementById('magic'),
  var el = ""
  word_counter = 0,
  character_counter = 0;

//console.log(words[0][0]);

function updateText()
{
  //console.log(el) //0
  el = el+words[word_counter][character_counter++];
  console.log(el)

  if(character_counter > words[word_counter].length)
  {
    word_counter++; 	//choose a different word
    character_counter = 0;	//start over with the first character of the word
    el = '';  //set the html to be blank

    //if we're displaying the last word, go back to the first word
    if(word_counter == words.length){
      word_counter = 0;
    }
  }
}
//updateText();
//setInterval(updateText, 3000);
