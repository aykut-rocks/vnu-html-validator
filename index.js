const { exec } = require('child_process');
const vnu = require('vnu-jar');
const { urls: VNU_URLS, options: VNU_OPTIONS } = require('./vnuconfig');
const VNU_PARAMS = Object.keys(VNU_OPTIONS)
	.filter(key => VNU_OPTIONS[key] !== false)
	.map(key => {
		const option = VNU_OPTIONS[key];

		return option === true ? `--${key}` : `--${key} ${option}`;
	});

/* eslint-disable no-console */
const execCallback = url => {
	return (error, stdout) => {
		if (error) {
			console.error(
				`\x1b[33m${url}\x1b[0m\n\x1b[31mHTML validation errors found!\n${stdout}\x1b[0m`
			);
			return;
		}
		console.log(`\x1b[33m${url}\x1b[0m\n\x1b[32mHTML validation successful!\n${stdout}\x1b[0m`);
	};
};

for (const url of VNU_URLS) {
	exec(`java -jar ${vnu} ${VNU_PARAMS.join(' ')} ${url} 2>&1`, execCallback(url));
}
