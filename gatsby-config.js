/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//  npm install gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-images

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

//plugin order matters, be careful
module.exports = {
  /* Your site config here */
  siteMetadata:{
    author: 'Nadish Sood',
    title: `Nadish's blog`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful', 
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACESS_TOKEN
      }
    },
    'gatsby-plugin-sass', 
    //either as above or as an object like below, this ones pulls files from external source.
    //adds file and allFile in schema
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'src', 
        path: `${__dirname}/src/`
      }
    }, 
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          'gatsby-remark-relative-images', 
          {
            resolve: 'gatsby-remark-images', 
            options:{
              maxWidth: 750, 
              linkImagesToOriginal: false
            }
          }
        ],
      },
    },
  ],
}


// gatsby-transformer-remark
// takes the sourced file via prev plugin, filters md andparses them into html.  
//adds markdownRemark and AllMarkdown Remark