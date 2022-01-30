import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'


//this query puts data on props - diff than query in normal pages.
// export const query = graphql`
//   query( $slug: String!){
//     markdownRemark (
//       fields:{
//        slug:{
//         eq: $slug
//         }
//       }
//   ){
//       frontmatter{
//         title
//         date
//       }
//       html
//     }
//   }
// `;


export const query = graphql`
query($slug: String!){
  contentfulBlogPost(slug:{eq:$slug}){
    title
    publishedDate(formatString:"MMMM Do, YYYY")
    body{
      raw
    }
  }
}
`



const Blog = (props) => {

  // const Bold = ({ children }) => <span className="bold">{children}</span>;

  // const Text = ({ children }) => <p className="align-center">{children}</p>;
  
  // const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  //   },
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  //   },
  // };
  

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div>{renderRichText(props.data.contentfulBlogPost.body)}</div>

    </Layout>
  );
};

export default Blog;