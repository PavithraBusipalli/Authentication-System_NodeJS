const express = require('express');
const { dbConnection } = require('./config/db');
const { userRouter } = require('./routes/registerRouter');
const { userLoginRouter } = require('./routes/loginRouter');
const { userLogoutRouter } = require('./routes/logoutRouter');
const  cookieparser  = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieparser());

app.use(userLogoutRouter);
app.use(userRouter);
app.use(userLoginRouter);

dbConnection()
.then(() => {
    console.log('DB Connection Success!!');
    app.listen(3000, () => {
        console.log('Server is listening ..!');
    })
})
.catch((err) => {
    console.log("ERROR: " + err.message);
});