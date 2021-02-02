const express = require('express');
console.log('express', express);

//create our app

const app = express();
app.use(express.static('server/public'));

//listen for network request (listen to whats sending a request)
app.listen(3000, function () {
  //when the server is ready, call this function
  console.log('Im listening', 3000);
});

// app. takes a couple of arguments port is the first and call back function
// if you see EADDRESSINUSE error run killall -9 node

//share any files inside public folder
