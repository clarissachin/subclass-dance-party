var Jumping = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="jumping"></span>');
  Jumping.prototype.step.call(this, timeBetweenSteps);
  this.setPosition(top, left);
};

Jumping.prototype = Object.create(Dancer.prototype);
Jumping.prototype.constructor = Jumping;

Jumping.prototype.step = function(timeBetweenSteps) {
  // this.$node.animate( {
  //   left: + 5, 
  // });
  var object = this;
  setTimeout(function() {
    object.step.call(object, 1000);
  }, 1000); 
};

Jumping.prototype.lineUp = function() {
  $(".jumping").css("left", "90%");
};



