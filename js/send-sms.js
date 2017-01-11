// Twilio Credentials 
var accountSid = 'ACa5d0676f8361f1a6dce3c1bc65830340'; 
var authToken = '
'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+19193567713", 
    from: "+19198884416", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
}, function(err, message) { 
    console.log(message.sid); 
});