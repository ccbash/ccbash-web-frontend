import { client } from '$lib/client.js'
import { gql } from '@apollo/client/core/core.cjs.js'

// export async function get({ params }) {
//const { count } = params
//const cint = parseInt(count)
export async function get() {
  const count = 3
  console.log('Query API: latest articles, count: ' + count)
  const query = gql`
    query LatestArticleLimted($count: Int!) {
      articles(limit: $count, sort: "created_at:desc") {
        slug
        title
        description
        image {
          alternativeText
          url
        }
        author {
          name
          uid
        }
      }
    }
  `

  try {
    const result = await client.query({ query, variables: { count } })
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
