# Telegram-AI
This is the code of the Telegram bot for AIKIN

This bot is an Long Term Memory AI (Artificial Intelligence) called AIKIN. 

The name A.I.K.I.N. stands for `Artificial Intelligence Knowlege Input Notation`.

## NOTE:

This is only the bot (client) and **NOT** the AI itself. 

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

So, If you want to use this telegram client for your own API you need to use the old code from above to connect to your endpoint, replacing `https:\/\/api.nulldev.org\/aikin.php` with the URI of your API.
