module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/ssbackend_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/ssbackend_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
