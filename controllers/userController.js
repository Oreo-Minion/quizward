var express = require('express');
var bodyParser = require('body-parser');

// Make requests on the server side
var rp = require('request-promise');

// Create Router Object & middleware
var router = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: false });
router.use(jsonParse);

/**
 * GET /user --> displays user profile
 * (Later) PUT /user --> updates user profile
 * GET /user/login --> user login page
 * POST /user/login --> trys to login user --> redirects: /user/login OR /user
 * GET /user/signup --> user sign up page
 * POST /user/signup --> trys to makes user --> redirects: /user/signup OR (/user or /user/login)?
 */

// =============== Routers ================
router.get('/', function(req, res) {
  res.render('user/profile', { user: req.user });
});


// ----------- post ----------------
router.post('/test', function(req, res) {
  if (!req.user) {
    res.json({ error: 'You must be signed in to view this page!' });
  } else {
    var url_origin = req.body.url_origin; // assume api is on same host
    var user_id = req.user.id;
    var uri = url_origin + '/api/users/' + user_id;
    console.log(`Uri is: ${uri} \n making the request now ...`);
    options = {
      uri: uri,
      method: 'GET',
      json: true,
    };

    // make request
    rp(options)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
  } // closes 'else' statement

});



module.exports = router;