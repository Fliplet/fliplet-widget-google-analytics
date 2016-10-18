(function () {
  var tag = $('script[data-' + Fliplet.Env.get('platform') + '-tracker]');
  if (tag) {
    Fliplet.Analytics.start(tag.data('id'));
  }
})();