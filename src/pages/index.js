import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import * as indexStyles from './index.module.scss';


const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark {
    edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YY")
          }
          fields{
              slug
          }
        }
      }
    }
        }
    `)

  return (
    <Layout> 

      
      <ul className={indexStyles.blogList}>
          {data.allMarkdownRemark.edges.map((edge)=>{
              return(
                  <li className={indexStyles.blogListItem}> 
                      <Link style={{ textDecoration: 'none' }} to={`/blog/${edge.node.fields.slug}`}>
                        <p className={indexStyles.blogTitle}>{edge.node.frontmatter.title}</p>
                        
                      </Link>
                      <p className={indexStyles.date}>{edge.node.frontmatter.date}</p>
                  </li>
              )
          })}
      </ul>
    </Layout>
  );
};

export default BlogPage;