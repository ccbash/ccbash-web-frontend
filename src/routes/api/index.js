import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export const post = async request => {
    // mitigate the body parsing bug
  if (typeof request.body === 'string') request.body = JSON.parse(request.body);

  // in case we got a para here we go
  // const { num } = request.body;
  const query = gql`
    query Hompage {
      homepage {
	    headline
	    description
	    display_services
	    display_team
	    display_latest
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
