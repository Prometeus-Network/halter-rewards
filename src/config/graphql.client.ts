import { GraphQLClient } from 'graphql-request';
import { config } from '.';

export const graphqlClient = new GraphQLClient(config.subgraphURL);
