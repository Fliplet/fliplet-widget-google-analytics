$('form').submit(function (event) {
  event.preventDefault();

  Fliplet.Widget.save({
    trackerId: $('[name="trackerId"]').val()
  }).then(function () {
    Fliplet.Widget.complete();
  });
});

// Fired from Fliplet Studio when the external save button is clicked
Fliplet.Widget.onSaveRequest(function () {
  $('form').submit();
});