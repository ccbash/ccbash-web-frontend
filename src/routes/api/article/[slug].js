import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {
    const { slug } = params;
    const query = gql`
        query ArticleBySlug ($slug: String!) {
            articles (
                where: {slug: $slug}
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
        const result = await client.query({ query, variables: { slug } });
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