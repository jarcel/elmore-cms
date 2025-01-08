module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('DO_SPACES_ACCESS_KEY'),
        secretAccessKey: env('DO_SPACES_SECRET_KEY'),
        region: env('DO_SPACES_REGION'),
        params: {
          Bucket: env('DO_SPACES_BUCKET'),
        },
        endpoint: env('DO_SPACES_ENDPOINT'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
