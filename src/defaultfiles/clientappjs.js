module.exports = "var ReactDOM = require('react-dom');\n\
var React = require('react');\n\
require('./app.scss');\n\
var MainApp  = function (data) {\n\
  ReactDOM.render(\n\
    <div className='app-tips' data={data}>这是一个React同构应用的初始化，你已经成功运行！</div>,\n\
    document.getElementById('app-container')\n\
  );\n\
};\n\
MainApp(datasrc||{});";