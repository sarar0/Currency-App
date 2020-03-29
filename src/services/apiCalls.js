const fetch = require('node-fetch');
require('dotenv').config();

var converter_key = process.env.CONVERTER_KEY;
var mode   = process.env.NODE_ENV;

function apiCall(req, mode) {
    var currency_from = encodeURIComponent("USD");
    var currency_to = encodeURIComponent("PHP");

    var url = `https://free.currconv.com/api/v7/convert?q=${currency_from}_${currency_to}&compact=ultra&apiKey=${converter_key}`

    var result = fetch(url) 
        .then(data=>data.json())
        .then(json=>json)
        .catch(error => {
        console.log(error)
    });

    return result
};



exports.apiCall = apiCall;