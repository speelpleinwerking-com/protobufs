const protobufs = require('./dist');
const assert = require('assert');

describe('protobuf verification', function() {
  describe('Playground#verify', function() {
    it('should report missing attributes', () => {
      assert.equal(protobufs.Playground.verify({}), 'details.object expected');
    });

    it('should report missing attributes', () => {
      assert.equal(protobufs.Playground.verify({
        details: {
          canonicalName: 'test',
          name: 'Test',
          zipCode: 8888
        },
        generalInformation: {
          pricing: {}
        },
        calendar: {},
        accessibility: {},
        location: [
          { description: '' }
        ],
        organisationalFoundation: {},
        crew: {},
        media: {},
        contact: {}
      }), null);
    });
  });
});
