module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/companies',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/companies_test',
    useNullAsDefualt: true,
    migrations: {
      directory: 'db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    }
  }
};
