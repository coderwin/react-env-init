module.exports = "// server端入口程序\n\
var express = require('express');\n\
// 端口号\n\
var port = process.env.PORT || 3003	;\n\
// 应用框架\n\
var app = express();\n\
// 数据库\n\
var mongoose = require('mongoose');\n\
// 中间件\n\
var bodyParser = require('body-parser');\n\
var cookieParser = require('cookie-parser');\n\
// 后端渲染模板\n\
var reactViews = require('express-react-views');\n\
// 后端路由入口\n\
var _Route = require('./server/routers/routers.js')\n\
// 数据库连接\n\
mongoose.connect('mongodb://127.0.0.1/app')\n\
app.set('view engine', 'jsx')\n\
app.engine('jsx', reactViews.createEngine())\n\
app.set('views', './client')\n\
app.use(cookieParser())\n\
app.use(express.static(__dirname + '/public'))\n\
/*上传文件大小限制*/\n\
app.use(bodyParser.urlencoded({extended: true,limit: '500mb'}))\n\
app.listen(port,  function () {\n\
  console.log('Dynamic react example listening on port ' + port)\n\
})\n\
/*首页*/\n\
app.get('/', _Route.index)\n";