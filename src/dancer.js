// Creates and returns a new dancer object that can step
/*var Dancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  // use jQuery to create an HTML <span> tag
  //dancer.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left 
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(Dancer.prototype.step, timeBetweenSteps);
}; */


/*

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
dancer.setPosition(top, left);

*/

// Creates and returns a new dancer object that can step
/*var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
}; */

var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
};

Dancer.prototype.setPosition = function () {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function (timeBetweenSteps) {
  setTimeout(function() {
  this.prototype.step(timeBetweenSteps);
  }, timeBetweenSteps);
};

/*var matt = new Dancer ($("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000);

console.log('matt is', matt); */