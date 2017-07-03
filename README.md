# Telegram-AI
This is the code of the Telegram bot for AIKIN

This bot is an Long Term Memory AI (Artificial Intelligence) called AIKIN. 

The name A.I.K.I.N. stands for `Artificial Intelligence Knowlege Input Notation`.

<b>The username of the bot is `aikin_bot`</b>

You can chat with it right away! <br>
Just message @aikin_bot or click this link: <a href="http://t.me/aikin_bot">t.me/aikin_bot</a>

**ALSO**:
The bot has an included image recognisation feature. <br>
Just send a Picture and let AIKIN describe it! 

## NOTE:

This is only the bot (client) and **NOT** the AI itself. 

## The bot itself:

<p align="center">
<br>
<strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike> Screenshots <strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike><br><br>
<div style="display:flex;">
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s2.jpeg" />
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s3.jpeg" />
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s4.jpeg" />
</div>
<br>
</p>

## Developer Info:

The bot used to call the NullDev AIKIN API Endpoint like 

```javascript
var options = {
  uri: "https:\/\/api.nulldev.org\/aikin.php",
  method: 'POST',
  body: '{\"input\":\"' + txt + '\"}',
  headers: {
    'nulldev-token': nl_token,
    'Content-Type': 'application/json',
  }
};
try{
  request(options, function(error, response, body){
    var jsonraw = JSON.parse(body);
    bot.sendMessage(_id, jsonraw.reply);
    console.log('\nUSER CHAT REPLY: ' + jsonraw.reply + "\n");
  });
}
catch(err){ return; }
```

Which is not the case anymore. AIKIN is a **private** Library now used like:

```javascript
var aikin = require('nulldev-aikin');
var aikin_api = new aikin;
aikin_api.set({ nlkey: nltoken });
aikin.wrap(function(){
  aikin_api.ask(txt, function (callback) {
    bot.sendMessage(_id, callback.message);
    console.log('\nAIKIN REPLY: ' + callback.message + "\n");
    console.log(JSON.stringify(callback));
  });
});
```

So, If you want to use this telegram client for your own API you need to use the old code from above to connect to your endpoint, replacing `https:\/\/api.nulldev.org\/aikin.php` with the URI of your API and change the callbacks. Also the Sightbot integration wont work as well since `https:\/\/api.nulldev.org\/sight-bot-ai.php` is locked down too.

<p align="center">
<br>
<strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike> The Bot in Action <strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike><br><br>
<img src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s1.png" /><br>
<img src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s5.png" /><br>
<br>
</p>
