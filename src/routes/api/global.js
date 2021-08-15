import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {

  const query = gql`
    query Categories {
      global {
        favicon { 
          url
        }
        siteName
        siteUrl
        Menu {
          name
          slug
        }
        description
        placeholder {
          url
        }
        socialnetworks {
          network
          icon {
            previewUrl
          }
          profilelink
        }
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
