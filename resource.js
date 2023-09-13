

const express = require('express');

const app = express();
const port = 3001;
var result='';

app.get('/resource', (req, res) => {
  
  const accessToken = req.headers.authorization?.replace('Bearer ', '');
  console.log("Client access token "+accessToken);

  if (!accessToken) {
    
    res.json({message:'Access token is missing'});
  }
    else if(accessToken){
       
    res.json({ message: 'Hello, World!' });
    }
    res.send(result);
    res.end();

});

app.listen(port, () => {
  console.log(`Resource Server is running on port ${port}`);
});
