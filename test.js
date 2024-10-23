const curl = require('curl');

// Replace these with your actual values
const conductorIapIp = 'https://192.168.51.49:38443/'; // e.g., '192.168.1.1'
const username = process.env.USERNAME; // Your username
const password = process.env.PASSWORD; // Your password

const loginData = JSON.stringify({
  user: username,
  passwd: password
});

// Make the request using curl module
curl.post(`${conductorIapIp}/rest/login`, loginData, {
  headers: {
    'Content-Type': 'application/json'
  },
  insecure: true // Ignore SSL certificate verification
}, (err, response, body) => {
  if (err) {
    console.error('Error during login:', err);
    return;
  }

  console.log('Response Status Code:', response.statusCode);
  console.log('Response Body:', body);
});
