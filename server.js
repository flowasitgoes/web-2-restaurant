const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3006;

// 设置静态文件目录
app.use(express.static(__dirname));

// 路由处理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/starter-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'starter-page.html'));
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 服务器已启动！`);
    console.log(`📱 访问地址: http://localhost:${PORT}`);
    console.log(`🌐 网络访问: http://0.0.0.0:${PORT}`);
    console.log(`\n📂 静态文件目录: ${__dirname}`);
    console.log(`📄 主页面: http://localhost:${PORT}/index.html`);
    console.log(`📄 启动页面: http://localhost:${PORT}/starter-page.html`);
}); 