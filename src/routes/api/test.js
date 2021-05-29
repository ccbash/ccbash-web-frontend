import { client } from '$lib/client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export const post = async request => {
    // mitigate the body parsing bug
    if (typeof request.body === 'string') request.body = JSON.parse(request.body);

    const { num } = request.body;

    try {
        const query = gql`
            query Doubled($x: Int) {
                double(number: $x)
            }
        `;
        const result = await client.query({
            query,
            variables: { x: num }
        });

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
