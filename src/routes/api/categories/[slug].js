import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {

  const query = gql`
    query Categories {
      categories {
        name
        slug
        articles {
          title
          description
          content
          slug
        }
        description
        weight
        color_schema
        image {
	      url
	      alternativeText
        }
    	  }
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