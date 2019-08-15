'use strict';
//on click of a thumbnail picture

function clickHandle() {
  $('.thumbnail').click(function(event) {
    let thumbSrc = $(event.currentTarget).find('img').attr('src');
    let thumbAlt = $(event.currentTarget).find('img').attr('alt');

    $('.hero').find('img').attr('src', thumbSrc).attr('alt', thumbAlt);
  });
}


$(clickHandle);