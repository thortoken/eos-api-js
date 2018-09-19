const { cube } = require('./cube');
const { square } = require('./square');
var assert = require('assert');

describe('Thor EOS API', function() {
  describe('#cube()', function() {
    it('should compute the cube of the number 3', function() {
      assert.equal(cube(3), 27);
    });
  });

  describe('#square()', function() {
    it('should compute the square of the number 3', function() {
      assert.equal(square(3), 9);
    });
  });
});