'use strict';
const tg = require('node-telegram-bot-api');
var aikin = require('nulldev-aikin');
let util = require('util');
let http = require('http');
let request = require('request');
var fs = require('fs');
var process = require('process');
process.on('uncaughtException', function(err) { console.error((err && err.stack) ? err.stack : err); });
console.log('\n\n\n' +
			'+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n' +
			'      INITIALIZING BOT...    \n' +
			'+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n'
);
var _s = "\n-----------------------------------------";
require.extensions['.json'] = function (module, filename) { module.exports = fs.readFileSync(filename, 'utf8'); };
var jsondata = require('./config.json'),
	cfg      = JSON.parse(jsondata),
	token    = cfg.bot.token,
	nltoken  = cfg.bot.nl_token,
	_n       = cfg.bot.botname,
	isDev    = cfg.dev.devmode,
	devs     = String.prototype.toLowerCase.apply(cfg.dev.devs).split(",");
console.log('\nLOADED JSON DATA:\n' + jsondata);
var aikin_api = new aikin;
aikin_api.set({ nlkey: nltoken });
const bot = new tg(token, { polling: true });
console.log('\n#-#-#-#-#-#-#-#-#-#-#\n#-------------------#\n# AIKIN BOT STARTED #\n#-------------------#\n#-#-#-#-#-#-#-#-#-#-#\n\n-- Copyright (c) 2017 NullDev --\n\nListening...\n\n');
bot.on('message', (msg) => {
	var txt   = msg.text;
	var from  = msg.chat.username;
	var name  = msg.chat.first_name;
	const _id = msg.chat.id;
	console.log(_s);
	console.log('\nUSER ' +  from + ' MADE CHAT MESSAGE: ' + txt + "\n");
	console.log(JSON.stringify(msg));
	if (isDev == 1 && !(devs.indexOf(from.toLowerCase()) > -1)){
		bot.sendMessage(_id, 
			"Sorry, " + name + 
			"... I am currently in maintenance mode! That normally means that my developer Chris is fixing bugs or programming features. " +
			"So please check back later :)\n\nYou can contact the developer for more information:\n\n@NullPing"
		);
		console.log(_s);
		console.log('USER ' + from + ' GOT DENIED. RESON: Maintenance Mode\n');
		console.log(from.toLowerCase() + " != " + devs.toString());
	}
	else if (txt.indexOf('!-- ') === 0){
		var cmd = txt.slice('!-- '.length);
		switch(cmd.toLowerCase()){
			case "status": {
				
			}
			case "clearcache": {
				if (devs.indexOf(from.toLowerCase()) > -1) bot.sendMessage(_id, "AIKIN: Cache Cleared. I forgot everything...");
				else bot.sendMessage(_id, "AIKIN: insufficient permissions...");
			}
		}
	}
	//First message
	else if (txt.toLowerCase() == "/start"){
		console.log('\nUSER ' + from + ' STARTED FIRST TIME\n');
		bot.sendMessage(_id, "Hii " + name + "!\n\n");
	}
	//Developer Info (Without Database in case offline)
	else if (/^((who is|whos|who's) (ur|your) (dev|developer|coder|programmer|owner|creator|maker))+(.*)$/i.test(txt) ||
		 /^((who|who did|whod|who'd) (made|created|programmed|coded|programed|developed|) (u|you|aikin))+(.*)$/i.test(txt)){
		var d1_f = [
			"His username is @NullPing",
			"@NullPing is his username",
			"@NullPing would be his username!",
			"You can contact him here: @NullPing",
			"If you wanna contact him, his username is @NullPing",
			"If you wanna message him, his username is @NullPing",
			"If you want to contact him, his username is @NullPing",
			"If you wanna contact him, his username is @NullPing",
			"His username would be @NullPing"
		],  
		d1 = d1_f[Math.floor(Math.random() * d1_f.length)],
		ansmsg = [
			"Chris. " + d1,
			"Chris (@NullPing)",
			"Chris! " + d1,
			"Chris! (@NullPing)",
			"Chris is my dev! " + d1,
			"Chris is my dev! (@NullPing)",
			"Chris-Sensai, " + d1,
			"Chris-Sensai (@NullPing)",
			"My developer is chris and " + d1,
			"My developer is chris. " + d1,
			"My developer is chris. (@NullPing)",
			"Chris is my developer! " + d1,
			"Chris is my developer! (@NullPing)",
			"It's chris! " + d1,
			"It's chris! (@NullPing)",
			"Chris is my creator. " + d1,
			"Chris is my creator. (@NullPing)",
			"My creator is chris! " + d1,
			"My creator is chris! (@NullPing)"
		],
		ans = ansmsg[Math.floor(Math.random() * ansmsg.length)];
		bot.sendMessage(_id, ans);
		console.log(_s);
		console.log('\nAIKIN REPLY: ' + ans + "\n");
	}
	else {
		//AIKIN Package calls API Endpoint
		aikin.wrap(function(){
			aikin_api.ask(txt, function (callback) {
				bot.sendMessage(_id, callback.message);
				console.log(_s);
				console.log('\nAIKIN REPLY: ' + callback.message + "\n");
				console.log(JSON.stringify(callback));
			});
		});
	}
});
