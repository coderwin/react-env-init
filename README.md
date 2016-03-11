# Introduction

An initialization scaffolding for express-react-views

## folder

```javascript
{
	"server": {
		"logs":{},
		"models":{},
		"schrmas":{},
		"routers":{
			"$1": "routers.js"
		},
	},
	"client": {
		"views":{
			"components":{},
			"commonview":{}
		},
		"pages":{
			"$1":"home.jsx"
		},
		"$1":"index.jsx",
		"$2":"app.jsx",
		"$3":"app.scss"
	}, 
	"public": {
		"js":{},
		"css":{},
		"imgs":{},
		"md":{}
	}, 
	"tools":{},
	"docs":{},
	"$1":"app.js",
	"$2":"READEME.md",
	"$3":"package.json",
	"$4":"webpack.config.js"
}
```

## run

install react-env-init:

* [sudo] npm install -g react-env-init
* envinit -s

Then you can run the command to start the application:

* npm install                install dependencies
* webpack                    pack the application
* node app.js                start application
