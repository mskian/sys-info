#!/usr/bin/env node

const si = require('systeminformation');
const ora = require('ora');
var moment = require('moment');

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
		console.log('Platform:' + sysos.platform);
		console.log('Distro:' + sysos.distro);
		if (sysos.codename == 0) {
			console.log('CODE: n/a');
		} else {
			console.log('CODE:' + sysos.codename);
		}
		console.log('Version:' + sysos.release)
		console.log('Kernel:' + sysos.kernel);
		if (sysos.build == 0) {
			console.log('Build: n/a');
		} else {
			console.log('Build:' + sysos.build);
		}
		console.log('Architecture:' + sysos.arch);
		console.log('\n');
		console.log('Brand:' + syscpu.brand);
		console.log('Manufacturer:' + syscpu.manufacturer);
		console.log('Cores:' + syscpu.cores);
		console.log('Processors:' + syscpu.processors);
		console.log('\n');
		console.log('Total Memory:' + (bytesToSize(sysmem.total)));
		console.log('Free Memory:' + (bytesToSize(sysmem.free)));
		console.log('Used Memory:' + (bytesToSize(sysmem.used)));
		console.log('Active Memory:' + (bytesToSize(sysmem.active)));
		console.log('Available Memory:' + (bytesToSize(sysmem.available)));
		console.log('Total Swap Memory:' + (bytesToSize(sysmem.swaptotal)));
		console.log('Total Swap Memory Used:' + (bytesToSize(sysmem.swapused)));
		console.log('Free Swap Memory:' + (bytesToSize(sysmem.swapfree)));
		console.log('\n');
		console.log('Disk Size:' + (bytesToSize(sysdisk[0].size)));
		console.log('Disk used:' + (bytesToSize(sysdisk[0].used)));
		console.log('Disk Usage:' +  sysdisk[0].use + '%');
		console.log('Location:' +  sysdisk[0].fs);
		console.log('\n');
		console.log('Time Zone:' + systime.timezone);
		console.log('Time Zone Name:' + systime.timezoneName);
		console.log('Current Time:' + (moment(systime.current).format('LLLL')));

	} catch (e) {
		spinner.stop();
		console.log(e)
	}
}
go();
