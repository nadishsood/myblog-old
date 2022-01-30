const path = require("path")

//when node is created we're going to attach a slug to it.
//oncreateNode runs for all nodes
//we want to access only md nodes, take the file name, create a field on that with the slug
// module.exports.onCreateNode = ({node, actions}) =>{
//     const { createNodeField } = actions;
//     if(node.internal.type === 'MarkdownRemark'){

//         const slug = path.basename(node.fileAbsolutePath, '.md')

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

//we will also use createPages from node api to create new pages
//this graphql is not the same as others, this is a function that allows us to perform queries
module.exports.createPages = async ({ graphql, actions }) => {
  //get path to template, get markdowndata, create new pages

  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    //createPage and pass slug to it
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
