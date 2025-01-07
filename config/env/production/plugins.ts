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
        upload: {
          Key: async (file) => {
            // Generate a folder structure based on the collection
            const collectionName = file.related[0]?.__type || 'general';
            const fileName = file.hash + file.ext;

            return `${collectionName}/${fileName}`;
          },
        },
        uploadStream: {
          Key: async (file) => {
            const collectionName = file.related[0]?.__type || 'general';
            const fileName = file.hash + file.ext;

            return `${collectionName}/${fileName}`;
          },
        },
        delete: {},
      },
    },
  },
});
