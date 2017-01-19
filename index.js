"use strict";

const fs = require("fs");
const Twitter = require("twitter");

const client = new Twitter(JSON.parse(fs.readFileSync("config.json")));

setInterval(() => {
	const date = new Date();

	client.post("statuses/update", {
		status: `It is ${date.getHours()} o'clock, ${date.getMinutes()} minutes and ${date.getSeconds()} seconds.`
	}, (error, tweet) => {
		if(error) {
			console.error(error);

			return;
		}

		console.log(tweet);
	});
}, 10000);
