# Welcome to Product Eng - Take home
The idea is to do complete a basic chat application that has a single room and no security.

# Description
**API**
Most of the API is running, but you need to complete one endpoint.
You also need to connect to that endpoint socket io

**Front end**
This React App has a basic login that does not check anything. Just add an email, will check if the email exists and if not will create an entry and return and id. So nothing to worry on that section. You will need to add components to display the messages and to send messages.

# How to run
You need to have docker installed
``` docker-compose up --build ```

# TODO
1) API: 
    http://localhost:18000
    The endpoints for adding messages are missing.

2) FE:
    http://localhost:13000
    We need to add the features of listing all the messages in the chat and to add a component to add messages.

3) Socket.io
    We added the package and init a channel called subscribeToTx.
    On the Front End you can use this:
    ```import { subscribeToTx } from '../utils/socket';```

    On the API you need to connected to the proper endpoint.
    On the API you can use this:
    ```req.app.io.emit('tx', 'new message');```

Considerations:
- Do not use redux.
- If you get stuck on the socket.io feel free to reach out.
- Be sure you don't have a mysql running locally.
- Login component was written in an old style, feel free to use hooks in your components.
- Look and feel is not important.