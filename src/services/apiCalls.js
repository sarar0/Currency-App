const fetch = require('node-fetch');
require('dotenv').config();

var converter_key = process.env.CONVERTER_KEY;
var mode   = process.env.NODE_ENV;

async function apiCall(req, mode) {
    try {
        var currency_from = encodeURIComponent("USD");
        var currency_to = encodeURIComponent("PHP");

        var url = `https://free.currconv.com/api/v7/convert?q=${currency_from}_${currency_to}&compact=ultra&apiKey=${converter_key}`

        const resp = await fetch(url)
        const data = await resp.json()
        return data
    }
    catch (err) {
        console.log(err)
     }
};

exports.apiCall = apiCall;