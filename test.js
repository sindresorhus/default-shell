import test from 'ava';
import m from './';

test(t => {
	t.true(m.startsWith(process.platform === 'win32' ? 'C:\\' : '/bin/'));
});
