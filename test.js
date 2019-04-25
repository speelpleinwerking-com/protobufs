const protobufs = require('./dist');
const assert = require('assert');

describe('protobuf verification', function() {
  describe('Playground#verify', function() {
    it('should be null on verifying correct object', () => {
      assert.equal(protobufs.Playground.verify({ name: 'Test', canonicalName: 'test', zipCode: 444 }), null);
    });

    it('should report missing attributes', () => {
      assert.equal(protobufs.Playground.verify({ name: 'Test', canonicalName: 'test' }),'zipCode: integer expected');
    });
  });
});


