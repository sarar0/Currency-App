const fetch = require('node-fetch');
require('dotenv').config();

var converter_key = process.env.CONVERTER_KEY;
var mode   = process.env.NODE_ENV;

async function apiCall(req, mode) {}


exports.apiCall = apiCall;