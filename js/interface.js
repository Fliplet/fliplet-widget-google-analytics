$('form').submit(function (event) {
  event.preventDefault();

  Fliplet.Widget.save({
    trackerName: 'custom',
    webTracker: 'UA-' + $('[name="webTracker"]').val().replace(/\s|^UA *-/gi, ''),
    nativeTracker: 'UA-' + $('[name="nativeTracker"]').val().replace(/\s|^UA *-/gi, '')
  }).then(function () {
    Fliplet.Widget.complete();
  });
});

// Fired from Fliplet Studio when the external save button is clicked
Fliplet.Widget.onSaveRequest(function () {
  $('form').submit();
});
