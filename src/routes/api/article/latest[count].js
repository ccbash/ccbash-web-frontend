import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {
    const { count } = params;
    // const query = gql`
    //    query LatestArticleLimted($count: Int!) {
    //        articles ( 
    //            limit: $count
    //            sort: "created_at:desc"
    //        ) {
    //            slug
    //            title
    //            description
    //            content
    //            image {
    //                alternativeText
    //                url
    //            }
    //            author {
    //                name
    //                uid
    //            }
    //        }
    //    }
    //`;
    const query = gql`
       query LatestArticleLimted {
           articles ( 
               limit: 3
               sort: "created_at:desc"
           ) {
               slug
               title
               description
               content
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