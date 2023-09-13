
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const crypto = require('crypto');


app.use(bodyParser.json());


const clients = [
  {
    clientId: 'client123',
    clientSecret: 'clientsecret123',
  },
];


const length=10;
const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
  const randomString = randomBytes.toString('hex').slice(0, length);

  console.log(randomString);


app.post('/token', (req, res) => {
  const { clientId, clientSecret, grant_type } = req.body;

  if (grant_type !== 'client_credentials') {
    res.status(400).json({ error: 'Invalid grant type' });
    return;
  }

  
  const client = clients.find((c) => c.clientId === clientId && c.clientSecret === clientSecret);

  if (!client) {
    res.status(401).json({ error: 'Invalid client credentials' });
    return;
  }
  
const accessToken = randomString;
 console.log(accessToken);
  res.json({ access_token: accessToken, token_type: 'Bearer' });
});

app.listen(port, () => {
  console.log(`Authorization Server is running on port ${port}`);
});
