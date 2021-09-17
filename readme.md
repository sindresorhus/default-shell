# default-shell

> Get the user's default [shell](https://en.wikipedia.org/wiki/Shell_(computing))

## Install

```sh
npm install default-shell
```

## Usage

```js
import defaultShell from 'default-shell';

// macOS
console.log(defaultShell);
//=> '/bin/bash'

// Windows
console.log(defaultShell);
//=> 'C:\\WINDOWS\\system32\\cmd.exe'
```

There is also a method that gets the correct default shell even if it changes at runtime:

```js
import {detectDefaultShell} from 'default-shell';

console.log(detectDefaultShell());
//=> '/bin/bash'
```
