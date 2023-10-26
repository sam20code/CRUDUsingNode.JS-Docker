const express = require('express')
const routers = express.Router()

const userDetails = require('../models/user')

routers.get('/',async(req,res) => {
    try{
        const user = await userDetails.find()
        res.json(user)
    }catch(err){
        console.log('error')
    }
    
})
routers.get('/:id',async(req,res) => {
    try{
        const user = await userDetails.findById(req.params.id)
        res.json(user)
    }catch(err){
        console.log('error')
    }
    
})

routers.post('/',async(req,res) => {
    const user = new userDetails({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        mail: req.body.mail
    })
    try{
        await user.save()
        res.json(user)
    }catch(err){
        console.log('error')
    }
    
})



module.exports = routers