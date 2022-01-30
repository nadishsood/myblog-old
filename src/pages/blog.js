import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark {
    edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
        }
    `)

  return (
    <Layout>

      <h1>Blog</h1>
      <p>Post will show "up" here later!</p>
    </Layout>
  );
};

export default BlogPage;