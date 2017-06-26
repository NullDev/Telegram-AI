'use strict';
const tg = require('node-telegram-bot-api');
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
require.extensions['.json'] = function (module, filename) { module.exports = fs.readFileSync(filename, 'utf8'); };
var jsondata = require('./config.json'),
    cfg      = JSON.parse(jsondata),
    token    = cfg.bot.token,
    nl-token = cfg.bot.nl-token,
    _n       = cfg.bot.botname;
console.log('\nLOADED JSON DATA:\n' + jsondata);
const bot = new tg(token, { polling: true });
console.log('\n#-#-#-#-#-#-#-#-#-#-#\n#-------------------#\n# AIKIN BOT STARTED #\n#-------------------#\n#-#-#-#-#-#-#-#-#-#-#\n\n-- Copyright (c) 2017 NullDev --\n\nListening...\n\n');
bot.on('message', (msg) => {
  var txt   = msg.text;
  var from  = msg.chat.username;
  const _id = msg.chat.id;
  var options = {
    uri: "https:\/\/api.nulldev.org\/aikin.php",
    method: 'POST',
    body: '{\"input\":\"' + txt + '\"}',
    headers: {
        'nulldev-token': nl-token,
        'Content-Type': 'application/json',
    }
  };
  console.log('\nUSER ' +  from + ' MADE CHAT MESSAGE: ' + txt + "\n");
  try{
    request(options, function(error, response, body){
      var jsonraw = JSON.parse(body);
      bot.sendMessage(_id, jsonraw.reply);
      console.log('\nUSER CHAT REPLY: ' + jsonraw.reply + "\n");
    });
  }	
});
