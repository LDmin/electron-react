import React, { useState, createContext } from 'react'
import { Layout } from 'antd'
import SideMenu from './menu'
import styles from './index.less'

// const LayoutContext = createContext()

const { Content, Sider, Header } = Layout

const BasicLayout: React.FC = props => {
  console.log(props.children)
  const [collapsed, setCollapsed] = useState(false)

  const LayoutMain = (
    <Layout className={styles.container}>
      <Header>hello world</Header>
      <Layout>
        {/* 左侧菜单 */}
        <Sider collapsed={collapsed}>
          <SideMenu />
        </Sider>

        {/* 右侧 content */}
        <Layout>
          <Content className={styles.content}>{props.children}</Content>
        </Layout>
      </Layout>
    </Layout>
  )

  return LayoutMain
}

export default BasicLayout
