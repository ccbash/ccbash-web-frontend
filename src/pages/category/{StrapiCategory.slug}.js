import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ArticlesComponent from "../../components/articles";
import Layout from "../../components/layout";

export const query = graphql`
  query CategoryQuery($slug: String!) {
    strapiCategory(slug: { eq: $slug }) {
      strapiId
      name
      description
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
      articles {
        slug
        title
        author
        created_at
        description
      }
    }
  }
`;

export default function Category() {
  const data = useStaticQuery(query);
  const category = data.StrapiCategory;
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <Layout seo={seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.name}</h1>
          <ArticlesComponent articles={category.articles} />
        </div>
      </div>
    </Layout>
  );
}
