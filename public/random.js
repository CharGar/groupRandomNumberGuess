
$(function(){
console.log('Random JQ Is Running')
var number = 0;
////Difficulty Selectors........
$('.easy').on('click', easy)
function easy(min, max){
//easy
  number = Math.floor((Math.random() * 10) + 1);
  console.log('easy');
  console.log(number);
  wipeIt();
  return number;

}
$('.medium').on('click', medium)
function medium(min, max){
//medium
  number = Math.floor((Math.random() * 30) + 1);
  console.log('medium');
  console.log(number);
  wipeIt();
  return number;

}
//hard
$('.hard').on('click', hard)
function hard(min, max){

  number = Math.floor((Math.random() * 100) + 1);
  console.log('hard');
  console.log(number);
  wipeIt();
  return number;

}//end Difficulty selectors



  var amountOfGuesses = 0;
  // var amountOfGuesses = $('.guesses').val();
  var ticker = amountOfGuesses;


  $('.input').on('click', numberGuesses);

  function numberGuesses(){
    console.log( ' in numberGuesses');
    amountOfGuesses = $('.guesses').val();
    console.log(amountOfGuesses);
    updateGuessesDisplay();
    return amountOfGuesses;
  }

function updateGuessesDisplay(){
  console.log( ' in updateGuessesDisplay');
  wipeThis();
  $('.guessesRemaining').empty();
  $('.guessesRemaining').append('<span>' + amountOfGuesses + '</span>');
}

//PLAYER GUESS SECTION &&& Counting down the total guess count//
$('.guess').on('click', displayGuess)


function displayGuess(){
  // var amountOfGuesses = $('.guesses').val();
  amountOfGuesses = amountOfGuesses - 1;
  updateGuessesDisplay();
  console.log(amountOfGuesses);
  console.log('test');
  $('.ticker').val();
  // $('.guessesRemaining').append(amountOfGuesses);
  $('#spanOne').prepend($('#one').val()+ ",");
  console.log('after span ' + amountOfGuesses);
}


//check guess section//right or wrong//

$('.guess').on('click', checkNumber);
var numberClicks= 0;
function checkNumber(){
  var playa = $('.players').val()
  console.log('checkNumber');

  numberClicks ++;
  console.log('numberClicks',numberClicks);
  console.log('amountOfGuesses',amountOfGuesses);

  // if(numberClicks == amountOfGuesses){
  //   alert('Hello, you are out of guesses...');
  // }
  // // if(playa = number) {
  // //   alert('Congrats, you win!!!')
  // // }
  // else{
  //   $('.upNext').text('Next players turn!')
  // }
}















































  /////////////////////////////////
function wipeThis(){
  $('.guessContainer').empty();
  // $('.guessContainer').append();
}




function wipeIt(){
  $('.buttonContainer').remove();
  // $('.guessContainer').append();
}



});
