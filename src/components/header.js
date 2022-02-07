import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';

import * as headerStyles from './header.module.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.leftTitle}>
        
            <Link className={headerStyles.title} to="/">
              {data.site.siteMetadata.title}
            </Link>
          
      </div>
      <div className={headerStyles.rightMenu}>
          <ul className={headerStyles.navList}>

            <li>
              <a
                className={headerStyles.navItem}
                href="https://twitter.com/nadishsood"
                activeClassName={headerStyles.activeNavItem}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className={headerStyles.navItem}
                href="https://www.instagram.com/nadishsood/"
                activeClassName={headerStyles.activeNavItem}
              >
                Instagram
              </a>
            </li>
            {/* <li>
              <a
                className={headerStyles.navItem}
                href="/about"
                activeClassName={headerStyles.activeNavItem}
              >
                About
              </a>
            </li> */}
          </ul>
      </div>
    </div>

  )
}

export default Header;
