import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import * as footerStyles from './footer.module.scss';


const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)


const siteMetadata = data.site.siteMetadata;

  return (
    <footer className={footerStyles.footer}>
      <h4>Created by {siteMetadata.author} @ april 2020</h4>
    </footer>
  )
}

export default Footer
