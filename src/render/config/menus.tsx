/**
 * 左侧菜单配置
 */
import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import { iconFonts, icons } from './iconfont'

const isDev = process.env.APP_ENV === 'development'

// iconfont.cn
const IconFont = createFromIconfontCN({
  scriptUrl: 'http://at.alicdn.com/t/font_1492696_4ai9rbngxhe.js'
})

export interface IMenu {
  title: string
  path: string
  layout?: string
  fullPath?: string
  icon?: React.ReactNode
  subs?: Array<IMenu>
  electron?: boolean
}

export default [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Home',
    path: '/Home',
    icon: <IconFont type='icon-RectangleCopy172' />,
    subs: [
      {
        title: 'Settings',
        path: '/Settings',
        fullPath: '/Home/Settings'
      },
      {
        title: 'Edge',
        path: '/Edge',
        fullPath: '/Home/Edge'
      }
    ]
  },
  {
    title: 'Login',
    path: '/User/login'
  }
] as Array<IMenu>
