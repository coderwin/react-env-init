module.exports = 'var React = require("react");\n\
var App = React.createClass({\n\
	render: function(){\n\
		var data = this.props.data;\n\
		var datasrc = "var datasrc = " + JSON.stringify(data);\n\
		return (\n\
            <html lang="en">\n\
	            <head>\n\
	                <title>{data.title}</title>\n\
	                <meta charSet="utf-8" />\n\
				    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width" />\n\
				    <meta name="format-detection" content="telephone=no" />\n\
				    <meta name="format-detection" content="email=no" />\n\
				    <meta name="format-detection" content="address=no;" />\n\
				    <meta name="apple-mobile-web-app-capable" content="yes" />\n\
				    <meta name="apple-mobile-web-app-status-bar-style" content="default" />\n\
				    <link rel="stylesheet" href="/css/index.css"/>\n\
	            </head>\n\
	            <body>\n\
	            	<script dangerouslySetInnerHTML={{__html: datasrc}} />\n\
	            	<h1>{data.title}</h1>\n\
	            	<div id="app-container"></div>\n\
	            	<script src="/js/index.bundle.js"></script>\n\
	            </body>\n\
            </html>\n\
        );\n\
	}\n\
});\n\
module.exports = App;';