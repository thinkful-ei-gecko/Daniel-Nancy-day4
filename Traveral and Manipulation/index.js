// function doHelloWorld() {
//     $('.js-hide-it').addClass('hidden');
//     $('.js-hello-world').text('hello world from JS');
//   }
  
//   doHelloWorld();

function doIt() {
  const toDos = $('.js-to-dos');
  // this will grab the first parent of toDos that has the `.js-parent-demo`
  // class
  toDos.parent('.js-parent-demo').removeClass('hidden');
  // this will look at all children of toDos that have the `.js-complete class`
  toDos.find('.js-complete').addClass('complete');
}

doIt();
