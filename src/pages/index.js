import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import Sections from "../components/sections";
import Team from "../components/team";
import Latest from "../components/latest";
import "../assets/css/main.css";
import "../assets/css/ccbash.css";

function Hero(props) {
  return (
    <div className="cc-hero">
      <h1>{props.title}</h1>
      <p>{props.headline}</p>
    </div>  
  );
};


function Section(props) {
  return (
    
    <h2>{props.title}</h2>
    
  );
};

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
    
      <Hero title={data.strapiHomepage.seo.metaTitle} 
            headline={data.strapiHomepage.hero.headline} />
      
      <div class="cc-conent">

        {/* SERVICE BLOCK */}

        { data.allStrapiCategory.node((section, index) => {
          return <Section section={section} />
        })}

        {/* TEAM BLOCK */}


        {/* LATEST ARTICLES BLOCK    <Latest latest_artivles={} /> */}

  

      </div>

      <div className="cc-content">
        <div className="uk-container uk-container-large">
          <h1>{data.strapiHomepage.hero.title}</h1>
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {

    strapiHomepage {
      hero {
        headline
        image {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    
    allStrapiCategory {
      nodes {
        strapiId
        slug
        name
        articles {
          slug
          title
          content
          author
          image {
            absolutePath
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
            childImageSharp {
              gatsbyImageData(width: 800, height: 500)
            }
          }
          author {
            name
            picture {
              childImageSharp {
                gatsbyImageData(width: 30, height: 30)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
