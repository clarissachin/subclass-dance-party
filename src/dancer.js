var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.$node.css({content: 'url(http://dressacat.com/chat.png)'});
  Dancer.prototype.setPosition.call(this, top, left);
  Dancer.prototype.step.call(this, timeBetweenSteps);
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

Dancer.prototype.lineUp = function() {
  $(".dancer").css("left", "10%");
};