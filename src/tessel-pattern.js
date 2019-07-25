// function to animate the tessel leds in a pattern
module.exports = function(tessel) {
  var patternLeds;
  if (tessel) {
    var switches = ['on', 'off', 'off'];
    tessel.led[1][switches[0]]();
    tessel.led[2][switches[1]]();
    tessel.led[3][switches[2]]();
    patternLeds = setInterval(function() {
      // rotate the switches
      switches.unshift(switches.pop())
      tessel.led[1][switches[0]]();
      tessel.led[2][switches[1]]();
      tessel.led[3][switches[2]]();
    }, 100);
    setTimeout(function() {
      clearInterval(patternLeds)
      tessel.led[1].off();
      tessel.led[2].off();
      tessel.led[3].off();
    }, 4500);
  }
}
