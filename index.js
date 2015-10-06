// get arguments

if (process.argv.length === 4) {
	var presentationTime = process.argv[2];
	var warningTime = process.argv[3];

	var presBlink = require('./lib/pres_blink');
	presBlink.start(presentationTime, warningTime);

} else {
	console.log('USAGE: node index <presentationTime> <warningTime>');
}