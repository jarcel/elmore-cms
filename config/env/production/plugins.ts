module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('DO_SPACES_ACCESS_KEY'),
            secretAccessKey: env('DO_SPACES_SECRET_KEY'),
          },
          endpoint: env('DO_SPACES_ENDPOINT'),
          region: env('DO_SPACES_REGION'),
          baseUrl: env('DO_SPACES_BASE_URL'),
          params: {
            Bucket: env('DO_SPACES_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        introspection: true,
        tracing: false,
      },
    },
  },
});
