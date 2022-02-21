const express = require('express');
const app = express();
const path = require('path');
const sqlite = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { createBrotliCompress } = require('zlib');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { application } = require('express');
const {auth} = require('./auth');


app.use(express.static(path.join(__dirname,'/build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


let db = new sqlite.Database('./Products.sqlite', (err) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log("Connected to the Products database.");
    }
})

// app.get('/',(req, res) => {
//     res.sendFile(path.join(__dirname,'build/index.html'));
// })

app.post('/api/register',(req,res) => {
    const newUser = req.body;
    let Password = null;
    console.log(newUser);
    bcrypt.genSalt(saltRounds, (err,salt) => {
        if(err){ console.log(err.message);}

        bcrypt.hash(newUser.Password,salt,(err,hash) => {
            Password = hash;
            const query = `INSERT INTO Users (ID,Password,Email) VALUES('${newUser.accountId}','${Password}','${newUser.accountEmail}')`;
            db.run(query,(err) => {
                if(err) {
                    return console.log(err.message);
                }
                console.log(`New user added: ${newUser.accountId}`);
            })
            res.json({success:true});
        })
    })
        
    
})

app.post('/api/login', (req,res) => {
    const accountId = req.body.accountId;
    const Password = req.body.Password;
    const query = `SELECT * FROM Users WHERE ID = '${accountId}' `;
    db.all(query,(err,row) => {
        // console.log(row[0].ID);
        if(err) {
            console.log(err.message);
            res.json({success: false});
        }
        else if(row.length == 0) {
            res.json({success: false});
        }
        else {
            bcrypt.compare(Password,row[0].Password,(err,isMatch) => {
                if(err){
                    console.log(err.message);
                    res.json({success: false});
                }
                let token = jwt.sign(row[0].ID,'something');
                const query = `UPDATE Users SET Token = '${token}' WHERE ID = '${row[0].ID}'`;
                db.run(query,(err) => {
                    res.cookie("toyproject_auth",token).json({loginSuccess: true});
                })
                
            })
        }
    })
})

app.get('/api/auth', auth, (req,res) => {
    res.json({
        ID:req.user.ID,
        Email:req.user.Email,
        Role:req.user.Role
    })
})

app.get('/api/logout',auth,(req,res) => {
    const query = `UPDATE Users SET Token='' WHERE ID='${req.user.ID}'`;
    db.run(query,(err) => {
        if(err) res.json({logout:false});
        res.json({logout:true});
    })
})

app.get('/images/:imgsrc',(req, res) => {
    res.sendFile(path.join(__dirname,`images/${req.params.imgsrc}`));
})
app.get('/Products/images/:imgsrc',(req,res) => {
    res.sendFile(path.join(__dirname,`images/${req.params.imgsrc}`));
})
app.get('/Products/Details/:param1/:param2/:imgsrc', (req, res) => {
    res.sendFile(path.join(__dirname,`images/${req.params.imgsrc}`));
})

app.get('/api/goods/:category', (req,res) => {
    const query = `SELECT * FROM ${req.params.category}`;
    db.all(query, (err, row) => {
        res.json({data:row});
    })
})

app.get('/api/goods/:category/:name', (req,res) => {
    const query = `SELECT * FROM ${req.params.category} WHERE Name="${req.params.name}"`;
    db.all(query, (err,row) => {
        res.json({data:row});
    })
})

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'build/index.html'));
})

app.listen(81);