//Models send to controllers

const fetch = require("node-fetch");
const _ = require('lodash');
const xmlParser = require('xml2json'); //an attempt to convert dailymed spl xml data to json

let Logic = function (incomingInput) {
  //need 'this' when creating new objects here
  this.enteredDrug = incomingInput  //storing the incoming data entered into a new property
}

Logic.prototype.callOtherAPI = async function (text, text2) {
  try {
    //fetch data from fda api and convert to JSON
    const res = await fetch(`https://dailymed.calebdunn.tech/api/v1/spl/?set_id=&labeler=&package_ndc=&product_ndc=&product_name=${text}&inactive_ingredient_name=${text2}&inactive_ingredient_unii=`)
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`);
  
    return data.results

} catch (err) {
  console.log(err)
}
};
