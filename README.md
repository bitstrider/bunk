# bunk

a decidedly featureless, low dependency http server to serve static resource files, with cli support

### Getting Started
Install it globally for use on the command line.
```
$ npm install -g bunk
```

### CLI Usage
The most basic way to use `bunk` is to run on the terminal:
```
$ bunk
```
This will serve all static files within the current working directory at [localhost:7070](localhost:7070).

### Options
For more _"advanced"_ usage, include in the command:
```
  -d, --dir <dir>    directory of static files to serve, default: .
  -p, --port <port>  port to run http server on, default: 7070
```

For exmaple, to serve the directory `build/production` on port `1337`, run on the terminal:
```
$ bunk -d build/production -p 1337
```

It is recommended, but not required, that you have an `index.html` within the root of the directory being served.


### API Usage
Install it as a local dependency for use within another module.
```
$ npm install --save bunk
$ npm install --save-dev bunk
```

Then require and call `bunk` with or without options

```javascript
var bunk = require('bunk');

bunk()
// => bunk: serving . on port 7070

bunk({dir:'build/production', port:1337})
// => bunk: serving build/production on port: 1337
```

### Credits
This module was heavily inspired by an example usage of [serve-static](https://github.com/expressjs/serve-static).
