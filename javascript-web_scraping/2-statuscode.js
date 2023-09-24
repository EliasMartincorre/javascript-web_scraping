#!/usr/bin/node
/* The first argument is the URL to request (GET)
The status code must be printed like this: code: <status code>
You must use the module request */

const request = require('request');
const url = process.argv[2];
console.log(url);

request(url, function (error, response) {
  if (error) {
    console.error('error:', error);
  } else {
    return ('code:', response.statusCode);
  }
});
