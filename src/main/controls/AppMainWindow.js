/**
 * electron窗口初始化
 */
'use strict'

import {
  BrowserView,
  BrowserWindow
} from 'electron'
import isDevEnv from 'electron-is-dev'
import path from 'path'
import {
  autoUpdater
} from 'electron-updater'
// import {
//   REACT_DEVELOPER_TOOLS,
//   REDUX_DEVTOOLS
// } from 'electron-devtools-installer'
import log from 'electron-log'
// import electronHelper from './electron-helper'
import AppAutoUpdater from '../controls/AppAutoUpdater'
import {
  DEV_ADDRESS,
  IS_MAC
} from '../../config'

export default class AppMainWindow extends BrowserWindow {
  constructor() {
    const config = {
      width: 1200,
      height: 716,
      minWidth: 1200,
      minHeight: 716,
      autoHideMenuBar: false,
      maximizable: true,
      fullscreen: false,
      fullscreenable: true,
      webPreferences: {
        nodeIntegration: true,
        webviewTag: true,
        preload: path.join(__dirname, 'preload.js')
      },
      backgroundColor: '#2e2c29',
      icon: `${path.join(__dirname, '/public/dock.jpeg')}`
    }

    super(config)

    this.mainWindow = this
    this.browserView = null

    this.initMainWindow()
    this.initEvents()
  }

  initMainWindow() {
    // 必须在主进程塞入文件前配置 loading
    this.windowLoading()
    this.loadURL(isDevEnv ? DEV_ADDRESS : `file://${path.join(__dirname, '../render/dist/index.html')}`)

    // if (isDevEnv) {
    // 打开开发者工具
    this.mainWindow.openDevTools()
    // }
    // 异步安装插件
    // installExtension(REACT_DEVELOPER_TOOLS)
    //   .then(name => console.log(`Added Extension REDUX_DEVTOOLS:  ${name}`))
    //   .catch(err => console.log('An error occurred: ', err))
    // installExtension(REDUX_DEVTOOLS)
    //   .then(name => console.log(`Added Extension REDUX_DEVTOOLS:  ${name}`))
    //   .catch(err => console.log('An error occurred: ', err))
  }

  // 主进程加载时的loading过渡，避免白屏
  windowLoading() {
    this.browserView = new BrowserView()
    this.mainWindow.setBrowserView(this.browserView)

    this.browserView.setBounds({
      x: 0,
      y: 0,
      width: 1010,
      height: 716
    })
    this.browserView.webContents.loadURL(`file://${path.join(__dirname, 'loading.html')}`)

    this.browserView.webContents.on('dom-ready', () => {
      this.mainWindow.show()
    })
  }

  initEvents() {
    // 窗口关闭的监听
    this.mainWindow.on('closed', () => {
      this.mainWindow = null
    })

    this.mainWindow.on('close', e => {
      // mac平台，左上角关闭窗口 = 隐藏窗口
      // if (!IS_MAC) {
      if (this.mainWindow && this.mainWindow['hide'] && this.mainWindow['setSkipTaskbar']) {
        this.mainWindow.hide()
        e.preventDefault()
        // this.mainWindow.setSkipTaskbar(true)
      }

    })
    this.mainWindow.once('ready-to-show', () => { // 加入loading.html后, 此处updateHandle无效
      // 检查自动更新
      // log.info('enter ready-to-show')
    })

    this.mainWindow.once('show', () => {
      log.info('enter show')
      // 检查自动更新
      AppAutoUpdater.updateHandle(this.mainWindow)
    })

    // 隐藏默认菜单
    this.mainWindow.webContents.once('did-finish-load', () => {
      this.mainWindow.setMenuBarVisibility(false)
    })
  }

  destoryMainWindow() {
    this.mainWindow = null
  }

  removeView() {
    this.mainWindow.removeBrowserView(this.browserView)
  }
}
