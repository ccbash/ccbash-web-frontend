import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {
  const { uid } = params;
 
  const query = gql`
    writers(where: {uid: $uid) {
      uid
      name
      picture {
        url
        alternativeText
      }
      presented
      mail
      phone
      about
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