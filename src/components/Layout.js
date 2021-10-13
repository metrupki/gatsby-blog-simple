import React from 'react'
import Nav from './Nav'
import * as layoutStyles from './layout.module.scss'
import '../styles/index.scss'


const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <Nav />
                <div className={layoutStyles.content}>
                {props.children}
                </div>
        </div>
    )
}

export default Layout;