import React from 'react'
import { Link } from 'gatsby'
import * as navStyles from './nav.module.scss'
import BurgerLogo from '../../static/hamburger3.svg';

const Nav = ({ menuStatus, setmenuStatus }) => {
    return(
        <header>
            <div className={navStyles.navstyle}>
                <h1><Link to="/">لعنا</Link></h1>
                <div className={`${menuStatus ? navStyles.activeBurger : '' }`}>
                    <button className={navStyles.button} onClick={() => setmenuStatus(!menuStatus)} onMouseEnter={() => setmenuStatus(!menuStatus)} >
                        <img src={BurgerLogo} alt="Open Menu" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Nav;