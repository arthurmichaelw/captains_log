// Require Modules
require('dotenv').config()
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Log = require('./models/log')

// Create Express App
const app = express()

// Config the App
/* Start Config */
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
/* End Config */

// Mount Middleware
/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

/* End Middleware */

// Mount Routes
/* Start Routes */

// INDEX -- READ -- GET
app.get('/logs/', (req, res) => {
  res.render('logs/Index')
})

// NEW
app.get('/logs/new', (req, res) => {
  res.render('logs/New')
})

// DELETE
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.redirect('/logs')
      }
    })
  })


// UPDATE
app.put('/logs/:id', (req, res) => {
  req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
  Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
    if (err) {
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/logs/${updatedLog._id}`)
    }
  })
})

// CREATE
app.post('/logs', (req, res) => {
  req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
  Log.create(req.body, (err, createdLog) => {
    if (err) {
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/logs/${createdLog._id}`)
    }
  })
})

// EDIT
app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundFruit) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.render('logs/Edit', {
          Log: foundLog
        })
      }
    })
  })

// SHOW -- READ -- GET
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.render('logs/Show', {
          Log: foundLog
        })
      }
    })
  })

/* End Routes */

// Listen on Ports
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
