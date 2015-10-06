var Blink1 = require('node-blink1');

var redTimeAfterFinish = -2000;
var finalizeDelay = 3000;

// check if there is a blink device available
try {
	var blink1 = new Blink1();
} catch(e) {
	console.log('Error:' + e.message);
	return;
}


exports.start = function(presentationTime, warningTime) {

	// calculate time in milliseconds
	presentationTime = presentationTime * 1000 * 60;
	warningTime = warningTime * 1000 * 60;

	console.log('Presentation time in milliseconds: ' + presentationTime);
	console.log('WarningTime in milliseconds: ' + warningTime);

	// turn to green
	blink1.setRGB(0, 195, 0);

	setInterval(function() {
		if(!countdownTimer()) {
			clearInterval(this);
			// fadeOutAfter(finalizeDelay);
			finalizeBlinker();
		}
	}, 1000);

	function finalizeBlinker() {
		console.log('Finalizing');

		blink1.writePatternLine(500, 255, 0, 0, 0);
		blink1.writePatternLine(500, 0, 0, 0, 1);
		blink1.playLoop(0, 1, 5, function() {
			setTimeout(turnOff, 5000);
		});
	}

	function turnOff() {
		blink1.off(function() {
			console.log('Turning off blink(1)');
		});
	}

	/**
	 * Count down the time
	 */
	function countdownTimer() {
		presentationTime = presentationTime - 1000;
		console.log('Presentation Time left: ' + presentationTime / 1000 + ' Seconds');

		if(presentationTime <= warningTime) {
			blink1.fadeToRGB(3000, 255, 198, 0);
		}

		if(presentationTime <= 0) {
			blink1.fadeToRGB(1000, 255, 0, 0);
		}

		if(presentationTime <= redTimeAfterFinish) {
			return false;
		}
		return true;
	}

};