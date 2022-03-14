module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        apiKey: env("MAILGUN_API_KEY"),
        domain: env("MAILGUN_DOMAIN"), //Required if you have an account with multiple domains
        host: env("MAILGUN_HOST", "api.mailgun.net"), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: "noreply@harrytang.xyz",
        defaultReplyTo: "noreply@harrytang.xyz",
      },
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  },
});
