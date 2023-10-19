const express = require('express');
const app = express();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const PRIVATE_KEY = "K-19-OCT-2023"

//middleware
app.use(express.json());
app.use(cors())

const users = [{username: 'khun', password: '123'}]

app.get("/", (req, res) => {
    res.status(200).send({success: true, data: "Hello Khun"})
})

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    let ret = users.find(x => x.username === username && x.password === password)
    if(ret){
        const token = jwt.sign({username}, PRIVATE_KEY)
        return res.send({success: true, data: token})
    }
})

function auth(req, res, next){
    if(!req.headers.authorization){

        res.send({success: false, error: "Please provide Authorization"})
    }
    const arr = req.headers.authorization.split(" ")
    if(arr.lenght != 2){
        res.send({success: false, error: "Please use Bearer Scheme"})
    }
    try {
        const decode = jwt.verify(arr[1], PRIVATE_KEY)
        if(decode){
            next()
        }else{
            res.send({success: false, error: "Wrong Token"})
        }
    } catch (error) {
        res.send({success: false, error: "Wrong Token"})
    }
}

//route
app.use(auth)
app.listen(5001, () => console.log('App is listening at 5001 ... '))