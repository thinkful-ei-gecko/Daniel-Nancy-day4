//get count 

function countUp(countTo){
    let result = [];

    for (let i=1; i <= countTo; i++){
        if(i % 15 === 0) {
            result.push('fizzbuzz')
        }
        if(i % 5 === 0) {
            result.push('buzz')
        }
        if(i % 3 === 0) {
            result.push('fizz')
        }
        else result.push(i)
        }
        return result;
}

function generateResult() {
    $('js-results').append(result)
}

function handleClick() {
    //prevent from submiting
    $('#number-chooser').on('submit', function(event) {event.preventDefault(); 
    let countTo = $('#number-choice').val();
    $('#number-choice').val('');
    countUp(countTo);
    generateResult(result);

    })
}




$(handleClick)
//replace counts with fizz or buzz or fizzbuzz

//