// Require Modules
require('dotenv').config()
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Log = require('./models/log')

// Create Express App

// Config the App
/* Start Config */
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
/* End Config */

// Mount Middleware
/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
/* End Middleware */

// Mount Routes
/* Start Routes */


// INDEX -- READ -- GET
app.get('/captainsLog', (req, res) => {
    Log.find({}, (err, foundLogs) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.render('fruits/Index', {
          Log: foundLogs
        })
      }
    })
  })

// NEW
app.get('/captiansLog/new', (req, res) => {
    res.render('captainsLog/New')
})

// DELETE

// UPDATE
app.put('/captainsLog/:id', (req, res) => {
    req.body.shipIsBroken === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.redirect(`/fruits/${updatedFruit._id}`)
      }
    })
  })

// CREATE
app.post('/captainsLog', (req, res) => {
    res.send('received')
})

// EDIT

// SHOW -- READ -- GET

/* End Routes */

// Listen on Ports
app.listen(3000, () => {
    console.log('Listening on Port 3000')
  })
