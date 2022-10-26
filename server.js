// Require Modules

// Create Express App

// Config the App
/* Start Config */
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
/* End Config */

// Mount Middleware
/* Start Middleware */

/* End Middleware */

// Mount Routes
/* Start Routes */


// INDEX -- READ -- GET

// NEW
app.get('/captiansLog/new', (req, res) => {
    res.render('captainsLog/New')
})

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW -- READ -- GET

/* End Routes */

// Listen on Ports
app.listen(3000, () => {
    console.log('Listening on Port 3000')
  })
