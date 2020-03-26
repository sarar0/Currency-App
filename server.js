const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ 
      results : {
        "GBP": {
          "EUR": 1.09, 
          "USD": 1.21
        }, 
        "EUR": {
        }
      }    
     });
});
