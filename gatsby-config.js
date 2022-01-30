/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata:{
    author: 'Nadish Sood',
    title: `Nadish's blog`
  },
  plugins: [
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
}


// gatsby-transformer-remark
// takes the sourced file via prev plugin, filters md andparses them into html.  
//adds markdownRemark and AllMarkdown Remark