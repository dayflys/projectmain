const jwt = require('jsonwebtoken');
const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database('./Products.sqlite', (err) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log("Connected to the Products database.");
    }
})

let auth = (req, res, next) => {
    let token = req.cookies.toyproject_auth;
    jwt.verify(token, 'something', (err,decoded) => {
        const query = `SELECT * FROM Users WHERE ID =  '${decoded}' AND Token = '${token}'`;
        db.all(query,(err,row) => {
            if(row.length == 0) {
                return res.json({auth:false});
            } else {
                req.user = row[0];
                next();
            }
        })
    })
}

module.exports = {auth};