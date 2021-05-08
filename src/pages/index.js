import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import "../assets/css/main.css";
import "../assets/css/ccbash.css";

function Hero(props) {
  return (
    <div className="cc-hero">
      <h1>{props.title}</h1>
      <p>{props.headline}</p>
    </div>
  );
}

function Section(props) {
  return <h2>{props.title}</h2>;
}

export default function IndexPage() {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <Hero
        title={data.strapiHomepage.seo.metaTitle}
        headline={data.strapiHomepage.hero.headline}
      />

      <div class="cc-conent">
        {/* SERVICE BLOCK */}

        {data.allStrapiCategory.node((section, index) => {
          return <Section section={section} />;
        })}

        {/* TEAM BLOCK */}

        {/* LATEST ARTICLES BLOCK <Latest latest_artivles={} /> */}
      </div>

      <div className="cc-content">
        <div className="uk-container uk-container-large">
          <h1>{data.strapiHomepage.hero.title}</h1>
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
        </div>
      </div>
    </Layout>
  );
}

const query = graphql`
  query {
    strapiHomepage {
      headline
      description
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
      display_service
      display_team
      display_latest
    }

    allStrapiCategory {
      nodes {
        strapiId
        slug
        name
        articles {
          slug
          title
          description
          author
          image {
            localFile {
              absolutePath
            }
          }
        }
      }
    }

    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, height: 500)
              }
            }
          }
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30, height: 30)
                }
              }
            }
          }
        }
      }
    }
  }
`;
