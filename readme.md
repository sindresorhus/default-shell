# default-shell

> Get the user's default [shell](https://en.wikipedia.org/wiki/Shell_(computing))

## Install

```sh
npm install default-shell
```

## Usage

```js
import defaultShell, {detectDefaultShell} from 'default-shell';

// macOS
console.log(defaultShell);
//=> '/bin/bash'

// Windows
console.log(defaultShell);
//=> 'C:\\WINDOWS\\system32\\cmd.exe'

// This can be useful if the default shell changes at runtime.
console.log(detectDefaultShell());
//=> '/bin/bash'
```
