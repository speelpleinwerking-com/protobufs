# Protocol buffers

These protocol buffers define the data structures for speelpleinwerking.com. They are compiled to JS and TS with protobuf.js.

## Development

To build the package (this will compile the .proto files to a .js and a .d.ts file):

```
npm run build
```

The tests are very simple. They only do a simple sanity check. To run the tests:

```
npm test
```

