/**
The user's default shell.

@example
```
import {defaultShell} from 'default-shell';

// macOS
console.log(defaultShell);
//=> '/bin/bash'

// Windows
console.log(defaultShell);
//=> 'C:\\WINDOWS\\system32\\cmd.exe'
```
*/
export const defaultShell: string;

/**
This can be useful if the default shell changes during running.

@returns The user's current default shell.

@example
```
import {detectShell} from 'default-shell';

console.log(detectShell());
//=> Same as `defaultShell` if nothing has changed.
```
*/
export function detectShell(): string;
