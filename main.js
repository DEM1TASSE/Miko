const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  // 获取屏幕尺寸
  const { screen } = require('electron');
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;

  // 设置合适的窗口尺寸以容纳桌宠和对话框
  const windowWidth = 480;
  const windowHeight = 280;

  const win = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    // macOS 特有设置：永久悬浮在所有桌面
    skipTaskbar: true, // 不在任务栏显示
    visibleOnAllWorkspaces: true, // 在所有工作区可见
    fullscreenable: false, // 禁止全屏
    // 设置窗口级别为最高
    type: process.platform === 'darwin' ? 'panel' : 'normal',
    // 设置窗口位置到屏幕右下角
    x: screenWidth - windowWidth - 20,
    y: screenHeight - windowHeight - 20,
    backgroundColor: 'rgba(0, 0, 0, 0)', // 确保背景完全透明
    hasShadow: false // 移除窗口阴影
  })

  // 添加关闭窗口的 IPC 监听器
  ipcMain.on('close-window', () => {
    win.close()
  })

  // 设置窗口级别为最高（macOS 特有）
  if (process.platform === 'darwin') {
    win.setAlwaysOnTop(true, 'floating', 1);
    win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  }

  // 确保窗口始终保持在最顶层
  win.on('blur', () => {
    if (process.platform === 'darwin') {
      win.setAlwaysOnTop(true, 'floating', 1);
    }
  });

  win.loadFile('index.html')

  // 添加快捷键支持
  win.webContents.on('before-input-event', (event, input) => {
    // Cmd+Q (macOS) 或 Ctrl+Q (其他平台) 退出应用
    if ((input.meta && process.platform === 'darwin' || input.control && process.platform !== 'darwin') && input.key.toLowerCase() === 'q') {
      app.quit()
    }
    // ESC 键关闭窗口
    if (input.key === 'Escape') {
      win.close()
    }
  })

  // 开发模式下打开开发者工具（注释掉以禁用自动打开）
  // if (process.env.NODE_ENV === 'development') {
  //   win.webContents.openDevTools();
  // }

  // 热重载支持
  if (process.env.NODE_ENV === 'development') {
    try {
      require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
      });
    } catch (err) {
      console.log('Electron reload not available:', err.message);
    }
  }
}

app.whenReady().then(() => {
  // macOS 特有设置：防止应用被隐藏
  if (process.platform === 'darwin') {
    app.dock.hide(); // 隐藏 Dock 图标
  }

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  // 防止应用失去焦点时被隐藏
  app.on('browser-window-blur', () => {
    // 保持应用活跃状态
  })
})

app.on('window-all-closed', () => {
  // 在 macOS 上，即使所有窗口关闭也不退出应用
  // 这样可以确保桌宠始终运行
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 防止应用被意外退出
app.on('before-quit', (event) => {
  // 可以在这里添加确认对话框
  // event.preventDefault(); // 取消注释可以完全防止退出
})