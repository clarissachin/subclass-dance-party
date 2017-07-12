$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    ); 
    $('body').append(dancer.$node);
     
    console.log('WINDOW.DANCERS', window.dancers);
  });
      
  

  $('.fadeThem').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      console.log('window.dancers[i].$node is', window.dancers[i].$node);
      window.dancers[i].$node.fadeToggle();
    }
  });

  $('.slideDown').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.slideToggle();
    }
  });

  $('.stack').on('click', function(event) {
    Jumping.prototype.lineUp();
    Fast.prototype.lineUp();
    BlinkyDancer.prototype.lineUp();
    Dancer.prototype.lineUp();
  });

  var bkgdUrl = 'https://s-media-cache-ak0.pinimg.com/originals/0c/aa/bc/0caabc1720999ea9c056156654d6631d.jpg';
  $('body').css('background-image', 'url("' + bkgdUrl + '")');
});

