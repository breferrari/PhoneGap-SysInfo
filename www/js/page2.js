var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
    this.deviceinfo = {};
  },

  // Bind Event Listeners
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  // deviceready Event Handler
  onDeviceReady: function() {
    console.log('Ready');
    app.deviceinfo = document.getElementById('deviceinfo');
    app.getDeviceInfo();
    document.addEventListener('backbutton', function(e) {
      e.preventDefault();
    }, false);
  },

  getDeviceInfo: function() {
    app.deviceinfo.innerHTML += 'Device Model: ' + device.model + '<br>' +
      'Device Cordova: ' + device.cordova + '<br>' +
      'Device Platform: ' + device.platform + '<br>' +
      'Device UUID: ' + device.uuid + '<br>' +
      'Device Version: ' + device.version + '<br>';
  },
};

var tap = 0;

function tapTimeout(time) {
  setTimeout(function() {
    tap = 0;
  }, time);
}

function doubleTap() {
  window.plugins.deviceFeedback.acoustic();
  tap++;
  tapTimeout(500);
  if (tap == 2) {
    navigator.vibrate(1000);
    tap = 0;
  }
};
