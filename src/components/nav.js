import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (

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

        <Link class="nav-toggle nav-open" to="#nav-open">
          <i class="fas fa-bars"/>
        </Link>
	    <Link class="nav-toggle nav-closed" to="#nav-closed">
	      <i class="fas fa-times"/>
	    </Link>

      </header>
    )}
  />
);

export default Nav;
