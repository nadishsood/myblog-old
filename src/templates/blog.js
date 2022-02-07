import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import * as blogStyles from './blog.module.scss';



//this query puts data on props - diff than query in normal pages.
export const query = graphql`
  query( $slug: String!){
    markdownRemark (
      fields:{
       slug:{
        eq: $slug
        }
      }
  ){
      frontmatter{
        title
        date(formatString: "DD MMMM, YYYY")
      }
      html
    }
  }
`;


const Blog = (props) => {

  return (
    <Layout>
      <p className={blogStyles.date}>{props.data.markdownRemark.frontmatter.date}</p>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      
      <div className={blogStyles.blogPostStyles} dangerouslySetInnerHTML={
        {
          __html: props.data.markdownRemark.html,
        }
      }>

      </div>

    </Layout>
  );
};

export default Blog;