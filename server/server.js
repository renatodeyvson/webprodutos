const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/',express.static('../app'));

app.listen(port, () => {
    console.log('Server started on: ' + port); 
});

require('./router')(app);