import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About page</h1>
      <p>I am Marian Burtoaca and I love bubulinul!</p>

      <Link to="contact">Contact me ??</Link>
    </Layout>
  );
};

export default AboutPage;