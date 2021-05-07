import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function Nav() {
  const data = useStaticQuery(query);

  return (
    <header id="nav-open">
      <Link to="/">{data.strapiGlobal.siteName}</Link>

      <nav>
        <ul>
          {data.allStrapiCategory.edges.map((category, i) => (
          <li key={`category__${category.node.slug}`}>
            <Link to={`/category/${category.node.slug}`}>
              {category.node.name}
            </Link>
          </li>
          ))}

        </ul>
      </nav>

      <Link className="nav-toggle nav-open" to="#nav-open">
        <i className="fas fa-bars"/>
      </Link>
	  <Link className="nav-toggle nav-closed" to="#nav-closed">
	    <i className="fas fa-times"/>
	  </Link>

    </header>
  )
};

const query = graphql`
  query {
    strapiGlobal {
      siteName
    }
    allStrapiCategory {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`;
