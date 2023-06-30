const express = require('express');
const router = new express.Router();
const queryDb = require('../db/connection');

router.get('/users',async (req, res)=>{
    try{
        let user = await queryDb(`Select * from user where id = ${req.query.id};`);
        if(user.length == 0){
            res.status(404).send("No Record Found")
        }
        res.status(200).send(user)
    }catch(e){
        res.status(400).send({
            status:e.name,
            statusMessage:e.message
        })
    }
})

module.exports = router;