import { LightningElement, api } from 'lwc';

export default class TransactionListItemBubbling extends LightningElement {
    @api transaction;

    handleSelect(event) {
Var request = require("request-json");
var url = require("url");

var TILL_URL = url.parse(process.env.TILL_URL);
var TILL_BASE = TILL_URL.protocol + "//" + TILL_URL.host;
var TILL_PATH = TILL_URL.pathname;

if(TILL_URL.query != null) {
  TILL_PATH += "?"+TILL_URL.query;
}

request.createClient(TILL_BASE).post(TILL_PATH, {
  "phone": ["15558675309", "15558675308"],
  "text": "Hello Heroku!"
}, function(err, res, body) {
  return console.log(res.statusCode);
});
        // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
        event.preventDefault();
        // 2. Create a custom event that bubbles. Read about event best practices at https://lwc.dev/guide/events#configure-event-propagation
        const selectEvent = new CustomEvent('transactionselect', {
            bubbles: true
        });
        // 3. Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}
