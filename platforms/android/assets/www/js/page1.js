var app = {
  // Application Constructor
  initialize: function() {
    console.log('iniciou');
    this.bindEvents();
  },

  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log('binding');
  },

  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    console.log('ready');

    //app.receivedEvent('deviceready');
    app.statusdiv = document.getElementById('status');
    window.addEventListener('batterycritical', app.battCrit, false);
    window.addEventListener('batterylow', app.battLow, false);
    window.addEventListener('batterystatus', app.battStat, false);
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },

  battCrit: function(info) {
    console.log('batcritico');
    navigator.notification.alert('Your battery is SUPER low!');
    app.drawStatus(info);
  },

  battLow: function(info) {
    console.log('batlow');
    navigator.notification.alert('Your battery is low!');
    app.drawStatus(info);
  },

  battStat: function(info) {
    console.log('batstat');
    app.drawStatus(info);
  },

  drawStatus: function(info) {
    console.log('batman');
    var s = 'Level is ' + info.level + '<br/>';
    s += 'Plugged in is ' + info.isPlugged;
    s += '</p>';
    app.statusdiv.innerHTML = s;
  },

};
