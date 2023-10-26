const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27018/UsersDetails'

const app = express()
mongoose.connect(url,{ useNewUrlParser: true, 
    useUnifiedTopology: true,})

const conn = mongoose.connection

//fn -> connection  -> resolve -> listen - port

function checkConnection(){resolve,reject}{
    let connected = conn;
    resolve();
}

checkConnection()
.then(node)
.catch(error);

conn.on('open', function(){
    console.log('connected....................')
})

app.use(express.json())

const userRoutes = require('./routes/getUser')
app.use('/userDetails',userRoutes)

let node = app.listen(9090, () => {
    console.log('server started')
})

