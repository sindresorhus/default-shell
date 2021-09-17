import process from 'node:process';
import test from 'ava';
import defaultShell, {detectDefaultShell} from './index.js';

test('main', t => {
	t.true(defaultShell.startsWith(process.platform === 'win32' ? 'C:\\' : '/bin/'));
});

test('detect', t => {
	t.is(detectDefaultShell(), defaultShell);
});
