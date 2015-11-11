var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
    this.accelInfo = {};
    this.watchID = null;
  },

  // Bind Event Listeners
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  // deviceready Event Handler
  onDeviceReady: function() {
    console.log('Ready');
    app.accelInfo = document.getElementById('accelInfo');
    app.accelBlock = document.getElementById('accelBlock');
    app.startAccelWatch();
    document.addEventListener('backbutton', function(e) {
      e.preventDefault();
    }, false);
  },

  startAccelWatch: function() {
    var options = {
      frequency: 100,
    };
    app.watchID = navigator.accelerometer.watchAcceleration(app.onSuccess, app.onError, options);
  },

  onSuccess: function(acceleration) {
    app.accelInfo.innerHTML = 'Acceleration X: ' + acceleration.x + '<br>' +
      'Acceleration Z: ' + acceleration.z + '<br>' +
      'Acceleration Y: ' + acceleration.y + '<br>' +
      'Timestamp: ' + acceleration.timestamp + '<br>';

    var marginLeft = -acceleration.x * 20;
    var marginTop = acceleration.y * 20;

    app.accelBlock.innerHTML = '<div class="block" style="margin-left: ' + marginLeft + 'px; margin-top: ' + marginTop + 'px"></div>';
  },

  onError: function() {
    app.accelInfo.innerHTML = 'Erro no acelerômetro!';
  },
};
