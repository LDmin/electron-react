import React from 'react'
import style from './_layout.less'
import logo from '@/assets/image/logo.png'

const LoginLayout: React.FC = props => {
  return (
    <div className={style['wrapper']}>
      <section className={style['section']}>
        <div className={style['logo']}>
          <img src={logo} alt='' />
        </div>
        <div className={style['children']}>{props.children}</div>
      </section>
    </div>
  )
}

export default React.memo(LoginLayout)
