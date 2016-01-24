'use strict';
module.exports = () => {
	const env = process.env;

	if (process.platform === 'darwin' || process.platform === 'linux' || process.platform === 'freebsd') {
		return env.SHELL || '/bin/bash';
	}

	if (process.platform === 'win32') {
		return env.COMSPEC || 'cmd.exe';
	}

	return env.SHELL || '/bin/sh';
}();
