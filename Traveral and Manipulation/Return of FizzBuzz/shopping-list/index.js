'use strict';

function generateItem(newItem) {
  $('.shopping-list').append(`<li>
  <span class="shopping-item">${newItem}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`);
}

function addItem() {
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    let newItem = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    generateItem(newItem);
  });
}


function deleteHandle() {
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(event.currentTarget).closest('li').remove();
  });
}

function checkHandler() {
  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })
}


function listHandler() {
  addItem();
  deleteHandle();
  checkHandler();
}


$(listHandler);