'use strict';

// function countUp(countTo){
//   let result = [];
//   for (let i=1; i <= countTo; i++){
//     if(i % 15 === 0) {
//       result.push('fizzbuzz');
//     }
//     if(i % 5 === 0) {
//       result.push('buzz');
//     }
//     if(i % 3 === 0) {
//       result.push('fizz');
//     }
//     else result.push(i);
//   }
//   return result
// }



function generateResults(countTo) {
  let results = [];
  for( let i = 1; i <= countTo; i++) {
    if (i % 15 === 0)  {
      results.push('fizzbuzz');
    }
    if (i % 5 === 0) {
      results.push('buzz');
    }
    if (i % 3 === 0) {
      results.push('fizz');
    }
    else results.push(i);
  }
  return results;
}

function makeHtml(results) {
  let htmlresult = results.map(result => {
    if (typeof result === 'string') {
      return `<div class="fizz-buzz-item ${result}"><span>${result}</span></div>`;
    }
    return `<div class="fizz-buzz-item"><span>${result}</span></div>`;
  });
  console.log(htmlresult);
  $('.js-results').append(htmlresult);
}

function handleClick() {
  //prevent from submiting
  $('#number-chooser').on('submit', function(event) {
    event.preventDefault(); 
    let countTo = $('#number-choice').val();
    $('#number-choice').val('');
    makeHtml(generateResults(countTo));
  });
}


$(handleClick);
//replace counts with fizz or buzz or fizzbuzz


//Capture user input
//prevent form submission
//set user input to variable

//process input
//counting up 
//determining if/else for division
//capturing this information

//interpret information
//generating html
//displaying html

//document ready function
