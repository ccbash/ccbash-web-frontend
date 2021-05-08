import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

export const query = graphql`
  query ServiceQuery($slug: String!) {
    strapiService(slug: { eq: $slug }) {
      strapiId
      name
      description
      content
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default function Service() {
  const data = useStaticQuery(query);
  const service = data.strapiService;
  const seo = {
    metaTitle: service.name,
    metaDescription: service.description,
    shareImage: service.image,
  };

  return (
    <Layout seo={seo}>
      <div>
        <div style={{ display: "grid" }}>
          <GatsbyImage
            style={{
              gridArea: "1/1",
            }}
            alt={`Picture for ${service.name} article`}
            image={service.image.childImageSharp.gatsbyImageData}
            layout="fullWidth"
          />
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            <h1 style={{ color: `white` }}>{service.name}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
