import React from 'react'
import * as menuStyles from './menu.module.scss'
import CloseLogo from '../../static/x-lg.svg'
import { Link, useStaticQuery, graphql } from 'gatsby';


const Menu = ({ menuStatus, setmenuStatus }) => {

    const data = useStaticQuery(graphql`
    {
        allContentfulLayout {
          edges {
            node {
                aboutPageLink
                homePageLink
            }
          }
        }
      }
    `)

    return(
        <div className={`${menuStyles.menu} ${menuStatus ? menuStyles.activeMenu : '' }`} 
          onMouseLeave={() => setmenuStatus(false)} 
          role="button"
          tabIndex="0" >
            <h1><Link to="/">{data.allContentfulLayout.edges[0].node.homePageLink}</Link></h1>
            <h1><Link to="/about">{data.allContentfulLayout.edges[0].node.aboutPageLink}</Link></h1>
            <button className={menuStyles.button} onClick={() => setmenuStatus(false)}>
                <img src={CloseLogo} alt="Close" />
            </button>
        </div>
    )
}

export default Menu;