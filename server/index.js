const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const https = require('https');

app.get('/api/news/se', (req, res) => {
  https.get(`https://newsapi.org/v2/top-headlines?country=se&apiKey=***REMOVED***`, (result) => {
      let data = '';
      result.on('data', chunk => {
          data += chunk;
      });
      result.on('end', () => {
          res.write(JSON.stringify(JSON.parse(data).articles));
          res.end();
      });
  });
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});