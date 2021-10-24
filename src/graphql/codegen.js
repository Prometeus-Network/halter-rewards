const network = process.env.NETWORK ?? 'testnet';

const config = {
  testnet: require('../config/testnet.json'),
}[network];

module.exports = {
  schema: config.subgraphURL,
  documents: ['./src/graphql/**/*.ts'],
  generates: {
    'src/graphql/graphql.schema.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
    'src/graphql/index.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        withResultType: true,
      },
    },
  },
};
