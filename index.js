require('dotenv').config();
const axios = require('axios');
const https = require('https');
const qs = require('qs');

const arubaURL = 'https://192.168.51.49:38443'

const loginData = {
  user: process.env.USERNAME,
  passwd: process.env.PASSWORD
};

// Create an httpsAgent to ignore SSL certificate validation
const agent = new https.Agent({  
    rejectUnauthorized: false // Ignore SSL certificate errors
  });

const headers = {
    `Content-Type`: 'application/json'
  };
console.log({headers, httpsAgent: agent})
const login = () => { 
    axios.post(`${arubaURL}/rest/login`, loginData, { headers, httpsAgent: agent })
    .then(response => {

        console.log('Login successful:', response.data);
    })
    .catch(error => {
        console.error('Error logging in:', error);
    });
}

login();