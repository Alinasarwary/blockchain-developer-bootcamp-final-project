const express = require("express");
const router = express.Router();

const Citizen = require("../model/CitizenModel");


//AddCitizen
router.post("/add", (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age =  req.body.age;
    const country = req.body.country;
    const province = req.body.province;
   

    const citizen = new Citizen({
        firstName, lastName, gender, age, country, province
    })
    citizen.save().then(c => {
        res.status(201).send(c);
    })
    .catch(err => {
        res.status(500).send(err);
    })
})

//getAll
router.get("/all", (req, res) => {
    Citizen.find()
    .then(c => {
        res.status(200).send(c);
    })
    .catch(err => {
        res.status(505).send(err);
    })
})

//getOne
router.get('/citizen/:id', (req, res)=>{
    const id = req.body._id;
    Citizen.findById(id)
    .then(c => {
        console.log(c);
        res.status(200).send(c);
    })
    .catch(err => {
        res.status(500).send(err);
    })
})

//DELETE REQUEST
router.delete("/citizen/:id/delete", (req, res) => {
    const id = req.params._id;
    Citizen.deleteOne({ id: id })
        .then(() => {
            res.status(200).send("citizen deleted")
        })
        .catch(err => {
            res.status(500).send(err)
        })
})
module.exports = router;