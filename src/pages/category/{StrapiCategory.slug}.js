import React from "react";
import { graphql } from "gatsby";
import ArticlesComponent from "../../components/articles";
import Layout from "../../components/layout";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      } } }
      author {
        name
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 30)
  } } } } } }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const category = data.category.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  };

  return (
    <Layout seo={seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          <ArticlesComponent articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export default Category;
