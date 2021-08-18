import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {
  const query = gql`
    query Global {
      global {
        favicon { 
          url
        }
        address
        contact
        siteName
        siteUrl
        Menu {
          name
          slug
        }
        Footer {
          name
          slug
        }
        description
        placeholder {
          url
        }
        socialnetworks {
          network
          icon_class
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
