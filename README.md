# Protocol buffers [![Build Status](https://travis-ci.org/speelpleinwerking-com/protobufs.svg?branch=master)](https://travis-ci.org/speelpleinwerking-com/protobufs)

These protocol buffers define the data structures for speelpleinwerking.com. They are compiled to JS and TS with protobuf.js.

## Usage

```
npm install @speelpleinwerking.com/protobufs
```

### TypeScript

```
import { Playground } from '@speelpleinwerking.com/protobufs';

Playground.verify({}); // 'canonicalName: string expected'
...
```

See [here](https://github.com/protobufjs/protobuf.js#toolset) for available methods on the types.

#### Only using interfaces

It's possible to only use the interfaces for project that don't require object validation (e.g. front end where you trust the responses you receive from the server). This way, your bundles stay small (interfaces are not included in the compiled code, they only help the type checker).

```
npm install --save-dev @speelpleinwerking.com/protobufs
```

```
import { IPlayground } from '@speelpleinwerking.com/protobufs';

const playground: IPlayground = ...; // Type safety without the overhead
```

### JavaScript

```
const models = require('@speelpleinwerking.com/protobufs')

models.Playground.verify({}) // 'canonicalName: string expected'
...
```

See [here](https://github.com/protobufjs/protobuf.js#toolset) for available methods on the types.

## Development

To build the package (this will compile the .proto files to a .js and a .d.ts file):

```
npm run build
```

The tests are very simple. They only do a simple sanity check. To run the tests:

```
npm test
```

## Docs

Latest docs built from `master` are available [here](https://speelpleinwerking-com.github.io/protobufs/).

