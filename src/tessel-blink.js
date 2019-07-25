// function to blink the tessel leds on and off
module.exports = function(tessel) {
  var blinkLeds;
  if (tessel) {
    tessel.led[1].on();
    tessel.led[2].on();
    tessel.led[3].on();
    blinkLeds = setInterval(function() {
      tessel.led[1].toggle();
      tessel.led[2].toggle();
      tessel.led[3].toggle();
    }, 100);
    setTimeout(function() {
      clearInterval(blinkLeds);
      tessel.led[1].off();
      tessel.led[2].off();
      tessel.led[3].off();
    }, 2500)
  }
}
