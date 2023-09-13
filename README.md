# client-credential
1. Below screenshot is when the client application requests a token from authorization server after validating client id, secrets.The client app then passes this token to resource server and then resource server sends a Hello World message to Client.

![image](https://github.com/node4learning/client-credential/assets/144169388/4fff0d6f-7ec2-4a9d-801f-d34e03b0ebb1)

2.Below screenshot is when client app sends invalid client id and secret and auth server cannnot validate it and hence sends a Invalid Client Credential Message.
![image](https://github.com/node4learning/client-credential/assets/144169388/21592634-2fcf-4e69-bb8b-6fd6c172f83e)

3. Below screesnshot is when client app tries to access resource server without any access token and resource server sends a message to Client app: Access token is missing.
![image](https://github.com/node4learning/client-credential/assets/144169388/69cb9f3f-2c4c-469e-afaa-16c8a32d7ff2)

