import path from 'path'

const pathResolve = (dir = '') => path.join(__dirname, dir)

// 程序名
export const PROJECT_NAME = '硅藻项目'

// main图标
// 该路径跟打包之后的dist/assets同级
export const ICON_DOCK = pathResolve('/assets/dock.png')
export const ICON_WINDOW = pathResolve('/assets/dock.png')
export const ICON_TRAY = pathResolve('/assets/tray.png')

// dev 环境的地址
export const DEV_ADDRESS = 'http://localhost:9090'

// 是否是mac
export const IS_MAC = process.platform === 'darwin'

// 请求api前缀
export const API_PREFIX = '/mock/api'
