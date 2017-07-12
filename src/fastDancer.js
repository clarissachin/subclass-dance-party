var Fast = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fast"></span>');
  Fast.prototype.step.call(this, timeBetweenSteps);
  this.setPosition(top, left);
};

Fast.prototype = Object.create(Dancer.prototype);
Fast.prototype.constructor = Fast;

Fast.prototype.step = function(timeBetweenSteps) {
  this.$node.animate( {
    // left: "+30", 
    height: "toggle"
  });
  var object = this;
  setTimeout(function() {
    object.step.call(object, 1000);
  }, 1000); 
};

Fast.prototype.lineUp = function() {
  $(".fast").css("top", "90%");
};