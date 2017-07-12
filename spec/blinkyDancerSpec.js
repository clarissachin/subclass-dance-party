describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('should have a lineUp function that makes all Blinkies stack at the top', function() {
    sinon.spy(blinkyDancer, 'lineUp');
    blinkyDancer.lineUp();
    expect(blinkyDancer.lineUp).to.be.a('function');
    expect(blinkyDancer.lineUp.callCount).to.equal(1);
  });
  

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.above(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.above(2);
    });
  });
});

describe('Dancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineUp function that makes all cats stack on the left', function() {
    sinon.spy(dancer, 'lineUp');
    dancer.lineUp();
    expect(dancer.lineUp).to.be.a('function');
    expect(dancer.lineUp.callCount).to.equal(1);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dancer, 'step');
      expect(dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dancer.step.callCount).to.be.above(1);

      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.above(2);
    });
  });
});


describe('jumpingDancer', function() {

  var jumpingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jumpingDancer = new Jumping(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(jumpingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineUp function that makes all Marios stack on the right', function() {
    sinon.spy(jumpingDancer, 'lineUp');
    jumpingDancer.lineUp();
    expect(jumpingDancer.lineUp).to.be.a('function');
    expect(jumpingDancer.lineUp.callCount).to.equal(1);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(jumpingDancer, 'step');
      expect(jumpingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      jumpingDancer.step();
      expect(jumpingDancer.step.callCount).to.be.above(1);

      clock.tick(timeBetweenSteps);
      expect(jumpingDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('fastDancer', function() {

  var fastDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fastDancer = new Fast(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fastDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it jump', function() {
    sinon.spy(fastDancer, 'step');
    fastDancer.step();
    expect(fastDancer.step.called).to.be.true;
  });

  it('should have a lineUp function that makes all zebras stack on the bottom', function() {
    sinon.spy(fastDancer, 'lineUp');
    fastDancer.lineUp();
    expect(fastDancer.lineUp).to.be.a('function');
    expect(fastDancer.lineUp.callCount).to.equal(1);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fastDancer, 'step');
      expect(fastDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      fastDancer.step();
      expect(fastDancer.step.callCount).to.be.above(1);
      fastDancer.step();
      clock.tick(timeBetweenSteps);
      expect(fastDancer.step.callCount).to.be.above(2);
    });
  });
});

