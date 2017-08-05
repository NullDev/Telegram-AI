<img style="width: 100%; height: auto;" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/banner.jpg" />

# Telegram-AI: Aikin
This is the code of the Telegram bot for AIKIN

This bot is an Long Term Memory AI (Artificial Intelligence) called AIKIN. 

The name A.I.K.I.N. stands for `Artificial Intelligence Knowlege Input Notation`.

<b>The username of the bot is `aikin_bot`</b>

You can chat with it right away! <br>
Just message @aikin_bot or click this link: <a href="http://t.me/aikin_bot">t.me/aikin_bot</a>

## Also:
The bot has an included image recognition feature. <br>
Just send a Picture and let AIKIN describe it! 

**Note:** This feature is heavily in development and might not work properly...

## NOTE:

This is only the bot (client) and **NOT** the AI itself. 

However, our Emotion Tone recognition API is open to everyone!

Endpoint: https://api.nulldev.org/emo

Useage Example: https://api.nulldev.org/emo?text=I+am+fine

Callback: <br>
```javascript
{
    "error":0,
    "given_text":"I am fine",
    "emotion_tone":"positive",
    "confidence_value":0.6998420293874229,
    "confidence_percent":"69.98%",
    "copyright":"NullDev"
}
```

Explanation: <br>
`error`: 0 = No error; 1 = Error, see "`message`" <br>
`given_text`: The input <br>
`emotion_tone`: The evaluated emotion tone of the input <br>
`confidence_valu`: The probability of the evaluation <br>
`confidence_percent`: Same as above but already calculated and rounded per cent

**Disclaimer**: <br>
This API provided by us (NullDev) is public, but comes with zero warrenty. We cannot ensure uptime. However, we still try to keep all of our API's online!

## The bot itself:

<p align="center">
<br>
<strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike> Screenshots Chat <strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike><br><br>
<div style="display:flex;">
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s2.jpeg" />
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s3.jpeg" />
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s4.jpeg" />
</div>
<br>
</p>


<p align="center">
<br>
<strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike> Screenshots Image Recognition <strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike><br><br>
<div style="display:flex;">
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s6.jpg" />
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s7.jpg" />
<img height="500" width="281" src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s8.jpg" />
</div>
<br>
</p>

## Bot Features:

- Normal Chat
- Natural Language Processing
- Long term memory
- Image recognition
- Denying Usernames and ID's
- Maintenance Mode 
- Admin/Dev List
- Status Informations
- Developer Info
- WhoAmI Information
- Emotion Recognition as mentioned above
- Debug informations 
- Other commands
- AI Cache clear

## Developer Info:

The bot calls our Aikin API endpoint like this:

```javascript
var options = {
	uri : 'https://api.nulldev.org/aikin?object=value',
	method : 'GET'
};
request(options, function(error, response, body){
	var ansParsed = JSON.parse(body);
	var _r = ansParsed.object; //Accessing objects of ansParsed
	bot.sendMessage(id, _r);
});
```
If you want to use this telegram bot with your own API, you need to replace `https://api.nulldev.org/aikin?object=value` with whater your endpoint is. 

<p align="center">
<br>
<strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike> The Bot in Action <strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike><br><br>
<p>Aikin Chat</p>
<img src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s1.png" /><br>
<p>Aikin Image Recognition</p>
<img src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s5.png" /><br>
<p>Aikin Emotion Evaluation & Debug</p>
<img src="https://raw.githubusercontent.com/NLDev/Telegram-AI/master/.src/s9.png" /><br>
<br>
</p>
