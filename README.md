# Presentation Timer

## Description:

Will stay green until the warning time is reached. Then it will fade to orange. If the presentation time is over it will fade to
red and stay there for a moment. Then it will blink a couple of times and then stop.

So you can set it for example to the length of your presentation and 5 minutes before the end of your presentation time
it will fade to orange. So you can see that your time is running up.

Blink(1) required: http://blink1.thingm.com

## Requirements
 node v0.12.7

## Installation

Clone the repository, go to the folder and make an:

	npm install

## Usage

	node index <presentationTime> <warningTime>

Enter presentation time and warning time in minutes.
