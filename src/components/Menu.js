import React from 'react'
import * as menuStyles from './menu.module.scss'
import CloseLogo from '../../static/x-lg.svg'

const Menu = ({ menuStatus, setmenuStatus }) => {
    return(
        <div className={`${menuStyles.menu} ${menuStatus ? menuStyles.activeMenu : '' }`} onMouseLeave={() => setmenuStatus(false)} >
            <h1>This is a page</h1>
            <h1>Page 2</h1>
            <h1>Page 3</h1>
            <h1>Some toher pages</h1>
            <button className={menuStyles.button} onClick={() => setmenuStatus(false)}>
                <img src={CloseLogo} alt="Close" />
            </button>
        </div>
    )
}

export default Menu;