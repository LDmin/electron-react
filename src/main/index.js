/**
 * electron 主进程入口
 */
'use strict'

import {
  app,
  ipcMain,
  Menu
} from 'electron'
import path from 'path'
import Store from 'electron-store'
import AppMainWindow from './controls/AppMainWindow'
import AppPrintWindow from './print/print'
import AppTray from './controls/AppTray'
import {
  PROJECT_NAME,
  IS_MAC
} from '../config'

const store = new Store()

// for test
store.set('LOCAL_ELECTRON_STORE', 'WELCOME TO MY TPL')

// const devTron = require('devtron')
// const Store = require('electron-store')

// 设置项目名
app.setName(PROJECT_NAME)

app.allowRendererProcessReuse = true

if (IS_MAC) {
  app.dock.setIcon(`${path.join(__dirname, '/public/dock.png')}`)
}

class MainApp {
  constructor() {
    this.mainWindow = null
    this.printWindow = null
    this.tray = null
  }
  init() {
    this.initAppLife()
    this.initIPC()
  }
  // app 的生命周期
  async initAppLife() {
    await app.whenReady()
    this.createMainWindow()

    // 设置菜单
    this.createMenu()

    app.on('window-all-closed', () => {
      console.log('window-all-closed')
      // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
      // 否则绝大部分应用及其菜单栏会保持激活。
      console.log('IS_MAC', IS_MAC)
      if (!IS_MAC) {
        console.log('quit')
        app.quit()
      }
    })

    app.on('before-quit', () => {
      console.log('before-quit')
      this.mainWindow.destoryMainWindow()
      // this.printWindow.destoryPrintWindow()
    })
  }
  // 所有的IPC通讯都放这边
  initIPC() {
    ipcMain.on('stop-loading-main', () => {
      this.mainWindow.removeView()
    })
  }
  // 创建主进程的窗口
  createMainWindow() {
    this.mainWindow = new AppMainWindow()

    // this.createPrintWindow()
    this.createTray()
  }
  // 创建打印的窗口
  createPrintWindow() {
    this.printWindow = new AppPrintWindow(this.mainWindow)
  }
  // 创建小图标
  createTray() {
    this.tray = new AppTray(this.mainWindow)
  }

  createMenu() {
    const template = [{
      label: '菜单',
      type: 'submenu',
      submenu: [{
        label: '退出',
        // accelerator: 'Ctrl+`',
        // role: 'toggleDevTools',·
        click: (item, focusedWindow) => {
          app.quit()
        }
      }]
    }]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  }
}

new MainApp().init()
