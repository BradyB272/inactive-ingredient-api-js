//Controllers send info to router

const Logic = require('../models/Logic')


exports.showDrug = async function (req, res) {
  let logic = new Logic(req.body.name)  //create a new instance of Logic which has incoming input as an object to use as {enteredDrug: input}
  let newinput = new Logic(req.body.searchField) //this is  an new instanc eof Logic with second entered value

  //run the getAPI function from the controller and pass in user entered value. store in variable

  let apiDrug = await logic.callOtherAPI(logic.enteredDrug, newinput.enteredDrug)

  //note splDrug is an array of objects!
  res.render('home', {apiDrug: apiDrug}) //note in order for ejs to work, need to pass in object like this
}

exports.home = function (req, res) {
  res.render('home') // ejs post may only work on get request?
}
