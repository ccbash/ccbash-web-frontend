import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";
import Seo from "./seo";

export default function Layout(children, seo) {
  return (
    <>
      <Seo seo={seo} />
      <Nav 
        globals=""
        entries=""
      />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
