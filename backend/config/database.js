module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://nikhilT27:Iamportfolio27@portfolio-strapi-backen-shard-00-00.o9n0o.mongodb.net:27017,portfolio-strapi-backen-shard-00-01.o9n0o.mongodb.net:27017,portfolio-strapi-backen-shard-00-02.o9n0o.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-j0dxbr-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
