var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  Dancer.prototype.setPosition.call(this, top, left);
  Dancer.prototype.step(timeBetweenSteps);
  window.dancers.push(this);
};

Dancer.prototype.setPosition = function (top, left) {
  var temp = this.$node;
  var styleSettings = {
    top: top,
    left: left
  };
  temp.css(styleSettings);
};

Dancer.prototype.step = function (timeBetweenSteps) {
//  console.log('this is', this);
  var temp = this;
  setTimeout(function() { 
    temp.step.call(temp, timeBetweenSteps);
  }, timeBetweenSteps);
}; 
