
const axios = require('axios');
const express = require('express');
const clientId = 'client123';
const clientSecret = 'clientsecret123';
const grantType = 'client_credentials';

const port=3002;
var result='';

const app=express();
app.get('/home',(req,res)=>{
    

axios
  .post('http://localhost:3000/token', { clientId, clientSecret, grant_type: grantType })
  .then((response) => {
    
    const accessToken = response.data.access_token;

    axios
      .get('http://localhost:3001/resource', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
       
        result=response.data.message;
      })
      .catch((error) => {
        result=error.response.data.error;
       
      });
  })
  .catch((error) => {
    result=error.response.data.error;
    
  });
  console.log(result);
  res.send(result);
  res.end();
});

app.listen(port, () => {
    console.log(`Client Server is running on port ${port}`);
  });
