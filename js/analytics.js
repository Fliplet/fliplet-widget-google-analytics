(function () {
  var tag = $('script[data-analytics-tracker-id]');

  if (!tag) {
    return;
  }

  var trackerData = Fliplet.Widget.getData(tag.data('analytics-tracker-id'));
  var trackerId = trackerData[Fliplet.Env.get('platform') === 'web' ? 'webTracker' : 'nativeTracker'];

  Fliplet.Analytics.start(trackerId, trackerData.trackerName);
})();