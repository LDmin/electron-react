/**
 * APP托盘
 */

import { app, Menu, Tray } from 'electron'
import AppMainWindow from './AppMainWindow'
import { ICON_TRAY } from '../../config'

const isMac = process.platform === 'darwin'

const trayIcon = ICON_TRAY

export default class AppTray {
  mainWindow: AppMainWindow
  tray: Tray | undefined

  constructor(mainWindow: AppMainWindow) {
    this.mainWindow = mainWindow || null

    this.initTray()
  }

  initTray() {
    this.tray = new Tray(trayIcon)
    this.tray.setToolTip('我的托盘图标')

    const trayMenuTemplate = [
      {
        label: '显示主页面',
        click: () => {
          this.mainWindow.show()
        }
      },
      {
        label: '退出',
        click: () => {
          app.quit()
        }
      }
    ]

    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
    // 设置此图标的上下文菜单
    // this.tray.setContextMenu(contextMenu)
    // mac下设置dock菜单
    if (isMac) {
      app.dock.setMenu(contextMenu)
    }

    // 单击右下角小图标显示应用
    this.tray.on('click', () => {
      this.mainWindow.show()
      // this.mainWindow.isVisible() ? this.mainWindow.hide() : this.mainWindow.show()
      // this.mainWindow.isVisible() ?
      //   this.mainWindow.setSkipTaskbar(false) :
      //   this.mainWindow.setSkipTaskbar(true)
    })
  }
}
