module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "mariadb"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USER", "strapi"),
      password: env("MYSQL_PASSWORD", "strapi"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
