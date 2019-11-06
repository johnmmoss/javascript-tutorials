

var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var StringPadder = require('../string-padder');

describe('StringPadder', function() {

  it('pad should return toPad padded with zeros up to width length', function() {

    var stringPadder = new StringPadder();

    expect(stringPadder.pad("22", 5)).to.equal("00022");
  });  

  it('pad should return toPad when width is same as toPad length', function() {

    var stringPadder = new StringPadder();

    expect(stringPadder.pad("22", 2 )).to.equal("22");

  });  

  it('pad should return toPad when width less than as toPad length', function() {

    var stringPadder = new StringPadder();

    expect(stringPadder.pad("123456", 5 )).to.equal("123456");
  });  
});
