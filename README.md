# 🐾 Miko - AI native 效率工具型桌宠

Built in #AdventureX2025

Miko 是一个AI native 效率工具型桌宠，可以帮你收发邮件、整理桌面、执行Python代码、执行工作流等各种任务。只需要用自然语言告诉它你想做什么，它就能帮你完成！

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
# Kimi AI API密钥 (必需 - 主要功能)
KIMI_API_KEY=sk-your-kimi-api-key-here

# MiniMax AI API密钥 (必需 - Gmail功能)
MINIMAX_API_KEY=your-minimax-api-key-here

# 天气API密钥 (可选，用于天气查询功能)
WEATHER_API_KEY=your-weather-api-key-here

# Gmail API配置 (可选，用于邮件功能)
GMAIL_CLIENT_ID=your-gmail-client-id
GMAIL_CLIENT_SECRET=your-gmail-client-secret
GMAIL_SENDER_EMAIL=your-gmail-address@gmail.com
```

#### 🔑 如何获取API密钥

**Kimi API密钥** (必需 - 主要功能)：
1. 访问 [Moonshot AI](https://platform.moonshot.cn/)
2. 注册账号并登录
3. 在控制台创建API密钥

**MiniMax API密钥** (必需 - Gmail功能)：
1. 访问 [MiniMax AI](https://api.minimaxi.com/)
2. 注册账号并登录
3. 在账户管理 > 接口密钥中获取API密钥

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
python backend/run.py
```
后端将在 `http://localhost:8000` 运行

**启动前端界面**：
```bash
npm start
```

## 📱 使用方法

启动后，你会看到Miko和桌面聊天窗口。你可以通过自然语言与Miko交互：

### 🗣️ 日常办公场景
- "你好，Miko" - 与智能助手打招呼
- "整理我的桌面文件" - 自动分类整理文件
- "现在几点了？" - 查询当前时间
- "播放音乐" / "暂停音乐" - 控制音乐播放
- "设置10分钟后的提醒" - 创建系统提醒

### 📁 文件管理场景
- "帮我整理Downloads文件夹" - 按类型分类文件
- "扫描桌面，看看有什么文件" - 分析文件结构
- "清理临时文件" - 删除系统垃圾文件
- "查找所有的PDF文件" - 搜索特定类型文件

### 🌤️ 信息查询场景
- "今天杭州天气怎么样？" - 获取实时天气信息
- "帮我计算1到100的和" - 数学计算
- "查看系统内存使用情况" - 系统状态监控
- "北京的人口是多少？" - 统计数据查询

### 🖥️ 系统控制场景
- "打开Chrome浏览器" - 启动应用程序
- "关闭所有Chrome窗口" - 应用程序管理
- "截个屏" - 系统功能操作
- "调节音量到50%" - 系统设置调整

### 📧 邮件管理场景
- "查看我的未读邮件" - 读取Gmail邮件
- "发邮件给张三，告诉他会议时间改到下午3点" - 直接发送邮件
- "给客户写一封关于项目进度的邮件" - AI智能起草邮件
- "发送会议纪要给团队" - 批量邮件发送

### 🐍 代码执行场景
- "生成一个8位随机密码" - 代码生成工具
- "分析这组数据的平均值" - 数据处理和统计
- "计算斐波那契数列前10项" - 算法实现
- "批量重命名文件" - 自动化脚本

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

## � Mik构o 项目技术栈

### 前端技术栈

#### 核心框架
- **Electron 37.2.4** - 跨平台桌面应用框架，实现透明悬浮窗口
- **React 19.1.0** - 前端UI框架，用于构建聊天界面
- **React DOM 19.1.0** - React DOM渲染器

#### 开发工具
- **Babel** - JavaScript编译器和转换工具
  - @babel/core ^7.28.0
  - @babel/preset-env ^7.28.0  
  - @babel/preset-react ^7.27.1
- **TypeScript 5.8.3** - 类型检查和开发体验
- **Electron Reload** - 开发模式热重载

#### UI组件
- **Lucide React 0.525.0** - 现代UI图标库
- **原生CSS** - 毛玻璃效果、透明背景、动画效果

### 后端技术栈

#### Web框架
- **FastAPI** - 现代Python Web框架，提供RESTful API服务
- **Uvicorn** - ASGI服务器，支持WebSocket实时通信
- **Python 3.8+** - 核心运行环境

#### AI集成
- **Kimi API (Moonshot AI)** - 主要AI引擎，处理对话和工具调用
  - 模型：kimi-k2-0711-preview
  - 用途：文件管理、应用控制、Python执行等主要功能
- **MiniMax API** - 专用AI引擎，优化邮件处理
  - 模型：MiniMax-Text-01
  - 用途：Gmail邮件智能起草和处理

#### 系统集成
- **AppleScript** - macOS系统深度集成
- **subprocess** - 系统命令执行
- **pathlib** - 现代文件路径处理
- **requests** - HTTP客户端，API调用

#### 数据存储
- **JSON** - 轻量级数据存储（用户记忆、对话历史）
- **本地文件系统** - 安全的本地数据管理
- **环境变量** - 敏感信息安全配置

#### 外部API集成
- **Gmail API** - 邮件读取和发送
- **WeatherAPI** - 天气信息查询
- **OAuth 2.0** - 安全认证机制

### 架构设计

#### 多Agent系统
- **MainAgent** - 主控制器，负责意图识别和工具调度
- **MemoryAgent** - 记忆管理，用户信息提取和上下文维护
- **HistoryManager** - 对话历史管理，多轮对话支持

#### 工具调度系统
- **统一调度器** - 工具调用的统一入口和结果处理
- **模块化工具** - 文件管理、应用控制、Python执行、Gmail操作
- **错误处理** - 完善的异常处理和用户反馈

#### 安全机制
- **沙盒执行** - Python代码安全隔离执行
- **权限最小化** - 只申请必要的系统权限
- **本地优先** - 敏感数据本地存储，不上传云端
- **环境变量管理** - API密钥等敏感信息安全配置

## 📁 项目结构

```
miko/
├── backend/                   # 后端Python服务
│   ├── ai_backend.py         # FastAPI主服务
│   ├── agents/               # AI代理系统
│   │   ├── main_agent.py     # 主控Agent
│   │   ├── memory_agent.py   # 记忆管理Agent
│   │   └── history_manager.py # 对话历史管理
│   ├── tools/                # 功能工具模块
│   │   ├── app_control.py    # 应用控制工具
│   │   ├── file_management.py # 文件管理工具
│   │   ├── python_executor.py # Python执行引擎
│   │   ├── gmail_tool.py     # Gmail邮件工具
│   │   └── tool_dispatcher.py # 工具调度器
│   ├── utils/                # 工具函数
│   │   └── gmail_auth.py     # Gmail认证工具
│   └── data/                 # 数据存储目录
├── components/               # 前端React组件
│   └── ui/                   # UI基础组件
├── src/                      # 前端服务层
│   └── services/             # API和WebSocket服务
├── main.js                   # Electron主进程
├── index.html                # 应用入口页面
├── package.json              # 前端依赖配置
├── requirements.txt          # Python依赖配置
├── .env.example              # 环境变量模板
└── README.md                 # 项目文档
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

## 🙏 特别感谢

- **[Kiro IDE](https://kiro.ai/)** - 强大的AI编程工具，提供了出色的开发体验
- **[Trae](https://trae.ai/)** - 智能代码助手，加速了开发过程
- **[Kimi-K2](https://platform.moonshot.cn/)** - 优秀的大语言模型，为Miko提供了强大的AI能力
- **[MiniMax](https://api.minimaxi.com/)** - 专业的AI服务，优化了邮件处理功能

## 🤝 贡献

欢迎提交Issue和Pull Request来改进Miko！

### 贡献指南
- 🐛 Bug报告：详细描述问题和复现步骤
- 💡 功能建议：提出新功能想法和使用场景
- 🔧 代码贡献：遵循项目代码规范，添加测试
- 📚 文档改进：完善使用文档和API说明

---

*🐾 享受与Miko的智能交互体验吧！让AI成为你最贴心的桌面伙伴！*