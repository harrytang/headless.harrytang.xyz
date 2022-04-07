module.exports = ({ env }) => [
  "strapi::errors",
  //'strapi::security',
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://dl.airtable.com",
            env("AWS_BUCKET_BASE"),
          ],
          "media-src": ["'self'", "data:", "blob:", env("AWS_BUCKET_BASE")],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
