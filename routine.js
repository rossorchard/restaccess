

var entities = [{ id: "3k2l12ek", pwd: "ddd"}, {id: "lk3jkl2", pwd: "ggg"}];

var tables = ["bills", "spend", "receive", "invoice"];


function endpoint( entityId, entityPwd ){
	var retval = { fetch: function(callback){
		callback({ name: "test", age:33}, null);
	}};
	return retval;
}




// iterate through entities array and extract information from endpoint for each entry
entities.forEach( function(val, ind, array){
	console.log("id: " + val.id);
	console.log("pwd: " + val.pwd);
	endpoint(val.id, val.pwd).fetch(function(data, error){
		console.log(data);
	});

});














