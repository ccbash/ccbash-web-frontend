import { client } from '$lib/client.js'
import { gql } from '@apollo/client/core/core.cjs.js'

export async function get({ params }) {
  const { slug } = params
  console.log('Query API: article, Slug: ' + slug)
  const query = gql`
    query ArticlesBySlug($slug: String!) {
      articles(where: { slug: $slug }) {
        slug
        title
        description
        image {
          url
          alternativeText
        }
        outline {
          ... on ComponentBlocksContent {
            __typename
            content
          }
        }
      }
    }
  `

  try {
    const result = await client.query({ query, variables: { slug } })
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
