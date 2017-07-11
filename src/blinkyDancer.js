

/*var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  blinkyDancer.setPosition(top, left);

  return blinkyDancer;
};
*/
var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinky"></span>');
  this.step(timeBetweenSteps);
};

//var oldStep = Dancer.prototype.step;

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

//BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step(timeBetweenSteps);
  console.log(this); 
  this.$node.toggle(); 
  console.log(this.$node); 
  setTimeout(function() {
    console.log('this is now', this);
    BlinkyDancer.prototype.step.call(this, timeBetweenSteps);
  }, timeBetweenSteps); 
};

/*var timeBetweenSteps = 100;

var clarissa = new BlinkyDancer (10, 20, timeBetweenSteps);

//clarissa.oldStep();

console.log('clarissa is', clarissa); */