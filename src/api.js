const express = require('express');
const errorMiddleware = require('./database/middlewares/errorMiddleware');
const loginRoute = require('./database/routes/loginRoute');
const userRoute = require('./database/routes/userRoute');
const categoryRoute = require('./database/routes/categoryRoute');
const postRoute = require('./database/routes/postRoute');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', postRoute);
app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
