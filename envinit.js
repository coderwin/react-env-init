module.exports = function(){

	var fs = require("fs");
	var exec = require('child_process').exec;

	var create = require("./src/create.js")
	var conf = require("./conf/config.js");

	var currentPath = process.cwd();
	var customConfigPath = currentPath + "/config.js";

	var config;
	fs.exists(customConfigPath, function(exists){
		if (exists) {
			config = require(customConfigPath);
		}else{
			config = conf;
		}
		create(config);
	})

	// initailize git
    if(process.argv.slice(2)[1] == 'git') {
        exec('git init', function(err, stdout, stderr){
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
        });
    }
}