import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {
  const { slug } = params;
 
  const query = gql`
    articles(where: {slug: $slug) {
      title
      description
      content
      slug
      category {
        slug
        name
      }
      author {
        id
        name
      }
      image {
        url
        alternativeText
      }
      featured
      service
    }
  `;

  try {
    const result = await client.query({ query });
    return {
      status: 200,
      body: {
        data: result.data
      }
    }
  } catch (err) {
    return {
      status: 500,
      error: 'Error retrieving data'
    }
  }
}