import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export async function get({ params }) {
    const { slug } = params;
    console.log(slug);
    const query = gql`
    query PagesBySlug ($slug: String!) {
        pages (
            where: {slug: $slug}
        ) {
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
                    ... on ComponentBlocksServices {
                        __typename
                        headline
                        services_only
                        categories(sort: "weight:asc") {
                            name
                            color_schema
                            description
                            image {
                                url
                                alternativeText
                            }
                            articles {
                                title
                                description
                            }
                        }
                    }
                    ... on ComponentBlocksTeam {
                        __typename
                        Headline
                        authors {
                            name
                            picture {
                                url
                                alternativeText
                            }
                            about
                        }
                    }
                    ... on ComponentBlocksArticles {
                        __typename
                        headline
                        count
                    }
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