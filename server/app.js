const express = require('express');
const app = express();
// 端口配置文件
const config = require('./config');
// 跨域
const cors = require('cors');
app.use(cors());
// 静态目录
app.use(express.static('./public'));
// 配置post请求
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 路由前缀
const routerApi = '/api/mayi'

// 登录
app.use(`${routerApi}`, require('./router/RouterHome'))
// 注册
app.use(`${routerApi}`, require('./router/RouterRegiste'))
// 首页
app.use(`${routerApi}`, require('./router/RouterHome'))
// 直播
app.use(`${routerApi}`, require('./router/RouterLive'))
// 发布
app.use(`${routerApi}`, require('./router/RouterRelease'))
// 消息
app.use(`${routerApi}`, require('./router/RouterMessage'))
// 我的
app.use(`${routerApi}`, require('./router/RouterMine'))

app.listen(config.server.port, () => {
    console.log(`http://127.0.0.1:${config.server.port}`);
})