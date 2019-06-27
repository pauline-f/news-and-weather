const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const https = require('https');
const dotenv =require('dotenv');

dotenv.config();

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

app.get('/api/news', (req, res) => {
  const country = req.query.country;
  https.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`, (result) => {
    let data = '';
    result.on('data', chunk => {
      data += chunk;
    });
    result.on('end', () => {
      res.write(data);
      res.end();
    });
  });
});

app.get('/api/weather', (req, res) => {
  const city = req.query.city;
  https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`, (result) => {
    let data = '';
    result.on('data', chunk => {
      data += chunk;
    });
    result.on('end', () => {
      res.write(data);
      res.end();
    });
  });
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});