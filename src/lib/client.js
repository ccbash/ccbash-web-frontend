import { ApolloClient, HttpLink } from '@apollo/client/core/core.cjs.js';
import { InMemoryCache } from '@apollo/client/cache/cache.cjs.js';

class Client {
    constructor() {
        if (Client._instance) {
            return Client._instance
        }
        Client._instance = this;

        this.client = this.setupClient();
    }

    setupClient() {
        const link = new HttpLink({
            uri: 'http://cms.ccbash.de:1337/graphql',
            fetch
        });

        const client = new ApolloClient({
            link,
            cache: new InMemoryCache()
        });
        return client;
    }
}

export const client = (new Client()).client;