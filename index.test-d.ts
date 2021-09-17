import {expectType} from 'tsd';
import defaultShell, {detectDefaultShell} from './index.js';

expectType<string>(defaultShell);
expectType<string>(detectDefaultShell());
