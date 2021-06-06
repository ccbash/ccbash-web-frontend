import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {
  const { category } = params;

  const query = gql`
    articles(where: {category: {slug: $category} }) {
  	  id
  	  title
  	  description
  	  content
  	  slug
  	  category {
  	    id
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