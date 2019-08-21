

var request = require("request");

var endpoints = ["subjects", "documents"];




if( endpoints.includes(process.argv[2]) ){

  request("http://ec2-13-239-37-120.ap-southeast-2.compute.amazonaws.com:9000/api/subjects", function(error, response, body){
	console.log("statuscode: ", response && response.statusCode);
	console.log("body: ", body);
  });


}

console.log("arguments are");
process.argv.forEach(function(val){
	console.log("arg: " + val);
});


console.log("argc: " + process.argc);






