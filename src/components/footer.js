import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

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
    <div>
      <h4>Created by {siteMetadata.author} @ april 2020</h4>
    </div>
  )
}

export default Footer
