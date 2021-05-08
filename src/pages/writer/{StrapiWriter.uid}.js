import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from "react-moment";
import Layout from "../../components/layout";
import Markdown from "react-markdown";

export const query = graphql`
  query WriterQuery($uid: String!) {
    strapiWriter(uid: { eq: $uid }, status: { eq: "published" }) {
      strapiId
      name
      about
      mail
      phone
      picture {
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

export default function Writer() {
  const data = useStaticQuery(query);
  const employee = data.strapiWriter;
  const seo = {
    metaTitle: employee.name,
    metaDescription: employee.about,
    shareImage: employee.picture
  };

  return (
    <Layout seo={seo}>
      <div>
        <div style={{ display: "grid" }}>
          <GatsbyImage
            style={{
              gridArea: "1/1",
            }}
            alt={`Picture for ${article.title} article`}
            image={employee.picture.childImageSharp.gatsbyImageData}
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
            <h1 style={{ color: `white` }}>{employee.name}</h1>
          </div>
        </div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <Markdown source={employee.about} escapeHtml={false} />

            <hr className="uk-divider-small" />

            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {employee.picture && (
                  <GatsbyImage
                    image={
                      employee.picture.childImageSharp.gatsbyImageData
                    }
                    alt={`Picture of ${employee.name}`}
                    style={{ borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  By {employee.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
