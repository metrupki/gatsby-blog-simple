import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as navStyles from './nav.module.scss'
import BurgerLogo from '../../static/hamburger3.svg'


const Nav = ({ menuStatus, setmenuStatus }) => {

    const data = useStaticQuery(graphql`
    {
        allContentfulLayout {
          edges {
            node {
              titleOnRightCorner
            }
          }
        }
      }
    `)

    return(
        <header>
            <div className={navStyles.navstyle}>
                <h1><Link to="/">{data.allContentfulLayout.edges[0].node.titleOnRightCorner}</Link></h1>
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