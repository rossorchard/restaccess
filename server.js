

var request = require("request");

request("http://ec2-13-239-37-120.ap-southeast-2.compute.amazonaws.com:9000/api/subjects", function(error, response, body){
	console.log("statuscode: ", response && response.statusCode);
	console.log("body: ", body);
});








