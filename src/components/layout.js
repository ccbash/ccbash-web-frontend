import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Seo from "./seo";

const query = graphql`query {
  strapiHomepage {
    seo {
      metaDescription
      metaTitle
      shareImage {
        localFile {
          publicURL
        }
      }
    }
  }
}`;

export default function Layout(children, seo) {
  const data = useStaticQuery(query);

  return (
    <>
      <Seo seo={seo} />
      <Nav />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
