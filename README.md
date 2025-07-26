# 🐾 Miko - 智能桌面助手

> 你的专属桌面AI伙伴，通过自然语言完成各种任务

Miko 是一个智能桌面助手，可以帮你管理文件、发送邮件、查询天气、执行Python代码等各种任务。只需要用自然语言告诉它你想做什么，它就能帮你完成！

## ✨ 主要功能

- 📁 **文件管理** - 整理、分类、搜索文件
- 📧 **邮件发送** - 通过Gmail发送邮件
- 🌤️ **天气查询** - 获取实时天气信息
- 🐍 **代码执行** - 运行Python代码
- 💬 **智能对话** - AI驱动的自然语言交互
- 🖥️ **应用控制** - 打开和管理系统应用

## 🚀 快速开始

### 1. 环境准备

确保你的系统已安装：
- **Python 3.8+**
- **Node.js 16+**
- **npm 或 yarn**

### 2. 下载项目

```bash
git clone [项目地址]
cd miko
```

### 3. 配置环境变量

复制环境变量模板：
```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的API密钥：
```env
# Kimi AI API密钥 (必需)
KIMI_API_KEY=sk-your-kimi-api-key-here

# 天气API密钥 (可选，用于天气查询功能)
WEATHER_API_KEY=your-weather-api-key-here

# Gmail API配置 (可选，用于邮件功能)
GMAIL_CLIENT_ID=your-gmail-client-id
GMAIL_CLIENT_SECRET=your-gmail-client-secret
```

#### 🔑 如何获取API密钥

**Kimi API密钥** (必需)：
1. 访问 [Moonshot AI](https://platform.moonshot.cn/)
2. 注册账号并登录
3. 在控制台创建API密钥

**天气API密钥** (可选)：
1. 访问 [WeatherAPI](https://www.weatherapi.com/)
2. 免费注册账号
3. 获取API密钥

### 4. 安装依赖

**后端依赖**：
```bash
pip install fastapi uvicorn openai requests pathlib python-multipart
```

**前端依赖**：
```bash
npm install
```

### 5. 启动应用

**启动后端服务**：
```bash
python backend/ai_backend.py
```
后端将在 `http://localhost:8000` 运行

**启动前端界面**：
```bash
npm start
```

## 📱 使用方法

启动后，你会看到一个透明的桌面聊天窗口。你可以：

### 基础对话
- "你好" - 与Miko打招呼
- "今天天气怎么样？" - 查询天气
- "帮我整理桌面文件" - 文件管理

### 文件管理
- "帮我整理Downloads文件夹"
- "查找所有的PDF文件"
- "删除重复的图片"

### 邮件功能
- "发邮件给张三，内容是..."
- "查看我的邮件"

### 代码执行
- "帮我计算1到100的和"
- "生成一个随机密码"
- "画一个简单的图表"

### 应用控制
- "打开计算器"
- "打开浏览器"
- "关闭所有Chrome窗口"

## 🔧 高级配置

### Gmail邮件功能设置

如果你想使用邮件功能，需要额外配置：

1. **获取Gmail API凭据**：
   - 访问 [Google Cloud Console](https://console.cloud.google.com/)
   - 创建项目并启用Gmail API
   - 创建OAuth 2.0凭据

2. **运行Gmail认证**：
   ```bash
   python gmail_auth.py
   ```

3. **按照提示完成OAuth认证流程**

### 自定义配置

你可以修改以下文件来自定义Miko：
- `backend/config.py` - 后端配置
- `components/` - 前端界面组件
- `backend/tools/` - 功能工具模块

## 🛠️ 开发模式

如果你想修改或扩展Miko：

**开发模式启动**：
```bash
# 后端开发模式（自动重载）
uvicorn backend.ai_backend:app --reload --host 0.0.0.0 --port 8000

# 前端开发模式
npm run dev
```

## 📁 项目结构

```
miko/
├── backend/                   # 后端Python服务
│   ├── ai_backend.py         # 主API服务
│   ├── agents/               # AI代理模块
│   ├── tools/                # 功能工具
│   └── utils/                # 工具函数
├── components/               # 前端React组件
├── transparent-chat/         # 聊天界面组件
├── main.js                   # Electron主进程
├── package.json              # 前端依赖配置
├── .env.example              # 环境变量模板
└── README.md                 # 本文档
```

## ❓ 常见问题

**Q: 启动后看不到界面？**
A: 检查是否同时启动了后端和前端服务，确保端口8000没有被占用。

**Q: API密钥无效？**
A: 检查 `.env` 文件中的密钥是否正确，确保没有多余的空格或引号。

**Q: 邮件功能不工作？**
A: 确保已完成Gmail API认证，运行 `python gmail_auth.py` 完成授权。

**Q: 天气查询失败？**
A: 检查天气API密钥是否有效，确保网络连接正常。

## 🔒 隐私与安全

- 所有API密钥都存储在本地 `.env` 文件中
- 不会上传任何个人数据到云端
- Gmail访问令牌仅用于发送邮件，不会存储邮件内容
- 建议定期更新API密钥

## 📄 许可证

ISC License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进Miko！

---

*🐾 享受与Miko的智能交互体验吧！*