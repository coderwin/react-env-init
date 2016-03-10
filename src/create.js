
module.exports = function(json){
	var fs = require("fs");
	var path = require("path");
	var curpath = process.cwd();

	/*服务端入口程序*/
	var appjs = require("./defaultfiles/serverappjs.js");
	/*package.json*/
	var packagejson = require("./defaultfiles/packagejson.js");
	/*webpack.config.js*/
	var webpackconfig = require("./defaultfiles/webpackconfig.js");
	/*服务端路由入口*/
	var router = require("./defaultfiles/serverrouters.js");
	/*客户端入口程序(js)*/
	var clientapp = require("./defaultfiles/clientappjs.js");
	/*客户端渲染入口(模版)*/
	var clientindex = require("./defaultfiles/clientindex.js");
	/*客户端渲染*/
	var appscss = require("./defaultfiles/clientappscss.js");

	
	function createfileordir(_json, curpath){
		for (var k in _json) {
			if(k.indexOf("$")>-1){
				writeDefault(curpath+path.sep+_json[k], "");
			}else{

				fs.mkdirSync(curpath+path.sep+k);
				//console.log("CreateDir ==> "+curpath+path.sep+k);
				createfileordir(_json[k], curpath+path.sep+k)
			}
		}
	}

	function writeDefault(file){
		//console.log("CreateFile ==> "+file)
		switch(file){
			case process.cwd()+"/app.js":{
				//console.log("Write ==> app.js")
				fs.writeFileSync(file, appjs);
				break;
			}
			case process.cwd()+"/package.json":{
				//console.log("WriteWrite ==> package.json")
				fs.writeFileSync(file, JSON.stringify(packagejson));
				break;
			}
			case process.cwd()+"/webpack.config.js":{
				//console.log("WriteWrite ==> webpack.config.js")
				fs.writeFileSync(file, webpackconfig);
				break;
			}
			case (process.cwd()+"/server/routers/routers.js"): {
				//console.log("WriteWrite ==> routers.js")
				fs.writeFileSync(file, router);
				break;
			}
			case (process.cwd()+"/client/app.jsx"):{
				//console.log("WriteWrite ==> client app.js")
				fs.writeFileSync(file, clientapp);
				break;
			}
			case (process.cwd()+"/client/index.jsx"): {
				//console.log("WriteWrite ==> client index.js")
				fs.writeFileSync(file, clientindex);
				break;
			}
			case (process.cwd()+"/client/app.scss"): {
				//console.log("WriteWrite ==> app.scss")
				fs.writeFileSync(file, appscss);
				break;
			}
			default: {
				fs.writeFileSync(file, "");
			}
		}
	}

	createfileordir(json, curpath);
	console.log("env init success!!\n\n"+
	"    You can run the command to start the application:\n\n"+
	"    npm install      install dependencies\n"+
	"    webpack          pack the application\n"+
	"    node app.js      start application\n"+"\n"+
	"    └───────envinit@"+require("../conf/version.js")+" @imChenJian");
}
