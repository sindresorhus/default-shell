/**
The user's default shell.

@example
```
import defaultShell from 'default-shell';

// macOS
console.log(defaultShell);
//=> '/bin/zsh'

// Windows
console.log(defaultShell);
//=> 'C:\\WINDOWS\\system32\\cmd.exe'
```
*/
declare const defaultShell: string;

export default defaultShell;

/**
This can be useful if the default shell changes at runtime.

@returns The user's current default shell.

@example
```
import {detectDefaultShell} from 'default-shell';

console.log(detectDefaultShell());
//=> '/bin/zsh'
```
*/
export function detectDefaultShell(): string;
