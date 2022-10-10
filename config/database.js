module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd1o3tsgqg4akcep5i1g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'storeguitars'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '3W83qNPj6p0Q62TKUmtH1oNlLlQMDrZe'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
