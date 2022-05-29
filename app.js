
const express = require("express");
const app = express();

// connect to db
const db = require('./db');
db.connect();
var passport=require('passport-local');
//

//
app.post( "/auth/signup" , passport.authenticate(local-signup, { session: false }),
(req, res, next)=> {
    // sign up
 res.json({
    user: req.user,
    });
}
);
app.post(
    "/auth/login",
    passport.authenticate(local-login&apos, { session: false }),
    (req, res, next) => {
    // login
    res.json({
    user: req.user,
    });
    }
   );
    

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});