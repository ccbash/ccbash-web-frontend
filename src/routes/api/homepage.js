import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export const post = async request => {
    // mitigate the body parsing bug
  if (typeof request.body === 'string') request.body = JSON.parse(request.body);

  const { num } = request.body;

  try {
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
		  categories {
		    slug
		    name
		    description
		    image {
		      url
		      alternativeText
		    }
		    services {
		      slug
		      name
		      description
		    }
		  }
		  writers {
		    uid
		    name
		    about
		  }
      }
    `;
    
    const result = await client.query({ query });

    return {
      status: 200,
      body: {
        nodes: result.data.double
      }
    }
  } catch (err) {
    return {
      status: 500,
      error: 'Error retrieving data'
    }
  }
}
