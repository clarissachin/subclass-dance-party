
var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinky"></span>');
  BlinkyDancer.prototype.step.call(this, timeBetweenSteps);
  this.setPosition(top, left);
  window.dancers.push(this);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  this.$node.toggle();
  var object = this;
  setTimeout(function() {
    object.step.call(object, timeBetweenSteps);
  }, timeBetweenSteps); 
};
