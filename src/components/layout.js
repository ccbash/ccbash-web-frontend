import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Seo from "./seo";

const Layout = ({ children, seo }) => {
  const data = useStaticQuery(query);

  return (
    <>
      <Seo seo={seo} />
      <Nav />
      <main>
        {children}
      </main>
    </>
  )
};

const query = graphql`
  query {
    strapiHomepage {
      seo {
        metaDescription
        metaTitle
        shareImage {
          publicURL
        }
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
