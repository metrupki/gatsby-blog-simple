import React from 'react'
import { Link } from 'gatsby'
import * as navStyles from './nav.module.scss'

const Nav = () => {
    return(
        <header>
            <div className={navStyles.navstyle}>
                <h1><Link to="/">لعنا</Link></h1>
                <h1>Burger Menu</h1> 
            </div>
        </header>
    )
}

export default Nav;