
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users.js')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://mokallaneelima:tAjlX80WK5TxWsrM@crud.u8pzgu7.mongodb.net/Neelima?retryWrites=true&w=majority&appName=CRUD")

app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id: id}, {
            name: req.body.name,
            email: req.body.email,
            number: req.body.number
        })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("server is running ....")
})


