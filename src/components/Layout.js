import React, { useState } from 'react'
import Nav from './Nav'
import * as layoutStyles from './layout.module.scss'
import '../styles/index.scss'
import Menu from './Menu'

const Layout = (props) => {

    const [menuStatus, setmenuStatus] = useState(false)

    return(
        <div>
            <div className={layoutStyles.container}>
                <Nav menuStatus={menuStatus} setmenuStatus={setmenuStatus} />
                    <div className={layoutStyles.content}>
                    {props.children}
                    </div>
            </div>
        <Menu menuStatus={menuStatus} setmenuStatus={setmenuStatus} />
        </div>
    )
}

export default Layout;