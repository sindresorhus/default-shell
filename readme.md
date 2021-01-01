# default-shell

> Get the user's default [shell](https://en.wikipedia.org/wiki/Shell_(computing))


## Install

```
$ npm install --save default-shell
```


## Usage

```js
const defaultShell = require('default-shell');

// macOS
console.log(defaultShell);
//=> '/bin/bash'

// Windows
console.log(defaultShell);
//=> 'C:\\WINDOWS\\system32\\cmd.exe'
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
