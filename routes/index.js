var express = require('express');
var router = express.Router();
var fs = require('fs');

var myObj;

//read our json file
function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

//read it so its ready when a get request comes
readJSONFile('./public/json/Tree.json', function (err, json) {
  if(err) { throw err; }
  myObj=json;
  console.log("Json file has been read!");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //REQUEST PARAMETERS:
  console.log("\n"+JSON.stringify(req.query)+"\n");
  //this is the json object we might return if we find matches with params
  var matchedObjects = "[";
  //this boolean is to keep track if we return everything if we didnt find anything matching the params.
  var matchFound = false;
  for(var i in myObj){
    if(doesObjMatchSearch(req.query, myObj[i])){
      matchFound=true;
      matchedObjects+=JSON.stringify(myObj[i]);
      matchedObjects+=",";
    }
  }
  //this line exists to remove the last comma
  matchedObjects = matchedObjects.substr(0,matchedObjects.length-1);
  matchedObjects+="]";
  console.log(matchedObjects);
  //send the json stuff. the whole thing if no parameters, else only what matched parameters
  if(!matchFound){
    return res.send(myObj);
  } else res.send(matchedObjects);
});
//do this method with a object from our tree.json, and see if it matched one of the parameters.
function doesObjMatchSearch(query, obj){
  var key;
  //find out what the first key is. we only allow you to use 1 search key.
  for(var keyx in query){
    key=keyx;
  }
  //depending on what the user wants in his params we check if our tree.json object match, if yes we return true.
  switch(key){
    case "leafcolor": 
    var objValue = JSON.stringify(obj.leafColor);
    var queryValue = JSON.stringify(query.leafcolor);
    console.log("Do these match?: "+objValue+" AND "+queryValue);
    if(objValue==queryValue){
      console.log("WE FOUND A MATCH!: "+objValue+" AND "+queryValue);
      return true;
    }
    break;
    case "barkcolor": 
    var objValue = JSON.stringify(obj.barkColor);
    var queryValue = JSON.stringify(query.barkcolor);
    console.log("Do these match?: "+objValue+" AND "+queryValue);
    if(objValue==queryValue){
      console.log("WE FOUND A MATCH!: "+objValue+" AND "+queryValue);
      return true;
    }
    break;
    case "size": 
    var objValue = JSON.stringify(obj.size);
    var queryValue = JSON.stringify(query.size);
    console.log("Do these match?: "+objValue+" AND "+queryValue);
    if(objValue==queryValue){
      console.log("WE FOUND A MATCH!: "+objValue+" AND "+queryValue);
      return true;
    }
    break;
    case "alive": 
    //the booleans are without the: "" so im adding them!
    var objValue = '"'+JSON.stringify(obj.alive)+'"';
    var queryValue = JSON.stringify(query.alive);
    console.log("Do these match?: "+objValue+" AND "+JSON.stringify(query.alive));
    if(objValue == queryValue){
      console.log("WE FOUND A MATCH!: "+objValue+" AND "+queryValue);
      return true;
    }
    break;
  }
  return false;
}

module.exports = router;