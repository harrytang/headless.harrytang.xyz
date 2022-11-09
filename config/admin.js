module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "2d1d3edb6b0f4f8eeb72815f0aeb4f60"),
  },
  apiToken: { salt: env("API_TOKEN_SALT") },
});
