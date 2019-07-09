#!/usr/bin/env node

const si = require('systeminformation');
const ora = require('ora');
const chalk = require('chalk');
var moment = require('moment');
moment().format();

// JavaScript To Convert Bytes To MB, KB, Etc - https://gist.github.com/lanqy/5193417
function bytesToSize(bytes) {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	if (bytes === 0) return 'n/a'
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
	if (i === 0) return `${bytes} ${sizes[i]}`
	return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}

async function go() {

	const spinner = new ora({
		text: 'Fetching your System Data',
		spinner: 'hamburger'
	});

	spinner.start();

	setTimeout(() => {
		spinner.color = 'yellow';
		spinner.text = 'Successfully Fetched the System Data';
	}, 1000);

	try {
		await new Promise(resolve => setTimeout(resolve, 2000));
		const dataos = await si.osInfo();
		const datacpu = await si.cpu();
		const datamem = await si.mem();
		const datadisk = await si.fsSize();
		const datatime = await si.time();
		var sysos = dataos;
		var syscpu = datacpu;
		var sysmem = datamem;
		var sysdisk = datadisk;
		var systime = datatime;
		spinner.stop();
		console.log('\n');
		console.log(chalk.blueBright('---------------------------'));
		console.log(chalk.cyanBright('Platform:' + sysos.platform));
		console.log(chalk.cyanBright('Distro:' + sysos.distro));
		if (sysos.codename == 0) {
			console.log(chalk.cyanBright('CODE: n/a'));
		} else {
			console.log(chalk.cyanBright('CODE:' + sysos.codename));
		}
		console.log(chalk.cyanBright('Version:' + sysos.release));
		console.log(chalk.cyanBright('Kernel:' + sysos.kernel));
		if (sysos.build == 0) {
			console.log(chalk.cyanBright('Build: n/a'));
		} else {
			console.log(chalk.cyanBright('Build:' + sysos.build));
		}
		console.log(chalk.cyanBright('Architecture:' + sysos.arch));
		console.log(chalk.blueBright('---------------------------'));
		console.log(chalk.magentaBright('Brand:' + syscpu.brand));
		console.log(chalk.magentaBright('Manufacturer:' + syscpu.manufacturer));
		console.log(chalk.magentaBright('Cores:' + syscpu.cores));
		console.log(chalk.magentaBright('Processors:' + syscpu.processors));
		console.log(chalk.blueBright('---------------------------'));
		console.log(chalk.yellowBright('Total Memory:' + (bytesToSize(sysmem.total))));
		console.log(chalk.yellowBright('Free Memory:' + (bytesToSize(sysmem.free))));
		console.log(chalk.yellowBright('Used Memory:' + (bytesToSize(sysmem.used))));
		console.log(chalk.yellowBright('Active Memory:' + (bytesToSize(sysmem.active))));
		console.log(chalk.yellowBright('Available Memory:' + (bytesToSize(sysmem.available))));
		console.log(chalk.yellowBright('Total Swap Memory:' + (bytesToSize(sysmem.swaptotal))));
		console.log(chalk.yellowBright('Total Swap Memory Used:' + (bytesToSize(sysmem.swapused))));
		console.log(chalk.yellowBright('Free Swap Memory:' + (bytesToSize(sysmem.swapfree))));
		console.log(chalk.blueBright('---------------------------'));
		console.log(chalk.whiteBright('Disk Size:' + (bytesToSize(sysdisk[0].size))));
		console.log(chalk.whiteBright('Disk used:' + (bytesToSize(sysdisk[0].used))));
		console.log(chalk.whiteBright('Disk Usage:' +  sysdisk[0].use + '%'));
		console.log(chalk.whiteBright('Location:' +  sysdisk[0].fs));
		console.log(chalk.blueBright('---------------------------'));
		console.log(chalk.greenBright('Time Zone:' + systime.timezone));
		console.log(chalk.greenBright('Time Zone Name:' + systime.timezoneName));
		console.log(chalk.greenBright('Current Time:' + (moment(systime.current).format('LLLL'))));
		console.log(chalk.blueBright('---------------------------'));
		console.log('\n');

	} catch (e) {
		spinner.stop();
		console.log(e)
	}
}
go();
