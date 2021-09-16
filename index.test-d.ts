import {expectType} from 'tsd';
import {defaultShell, detectShell} from './index.js';

expectType<string>(defaultShell);
expectType<string>(detectShell());
