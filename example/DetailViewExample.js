'use strict';

var DetailView = require('detail/DetailView'),
    Xhr = require('util/Xhr');

Xhr.ajax({
  url: '/detail.json',
  success: function (data) {
    var fire;

    fire = data.features[0];

    DetailView({
      el: document.querySelector('.detail-view-example'),
      data: fire
    }).render();
  },
  error: function (e) {
    document.querySelector('.detail-view-example').innerHTML = [
      '<p class="alert error">',
        'Failed to create detail view example.',
      '</p>'
    ].join('');
  }
});
