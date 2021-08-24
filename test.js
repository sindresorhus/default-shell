import process from 'node:process';
import test from 'ava';
import defaultShell from './index.js';

test('main', t => {
	t.true(defaultShell.startsWith(process.platform === 'win32' ? 'C:\\' : '/bin/'));
});
