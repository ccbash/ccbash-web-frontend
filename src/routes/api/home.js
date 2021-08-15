import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {

  const query = gql`
    query home {
      homepage {	
        headline
        description
        image {
          url
          alternativeText
        }
        display_services
        display_team
        display_latest
      }
      categories {
        name
        slug
        articles {
          title
          description
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
      writers {
        uid
        name
        picture {
          url
          alternativeText
        }
        title
        about
      }
    }
  `;

  try {
    const result = await client.query({ query });
    return {
      status: 200,
      body: result.data
    }
  } catch (err) {
    return {
      status: 500,
      error: 'Error retrieving data'
    }
  }
}