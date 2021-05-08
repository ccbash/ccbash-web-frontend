import React from "react";
import { Link } from "gatsby";

export default function Nav(globals, entries) {
  const data = useStaticQuery(query);

  return (
    <header id="nav-open">
      <Link to="/">{globals.siteName}</Link>

      <nav>
        <ul>
          {entries.map((category, i) => (
            <li key={`category__${category.node.slug}`}>
              <Link to={`/category/${category.node.slug}`}>
                {category.node.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link className="nav-toggle nav-open" to="#nav-open">
        <i className="fas fa-bars" />
      </Link>
      <Link className="nav-toggle nav-closed" to="#nav-closed">
        <i className="fas fa-times" />
      </Link>
    </header>
  );
}
