// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'otfma',
      user:     'postgres',
      password: 'admin'
    },
  },
  
  docker:{
    client: 'pg',
    connection: "postgres://postgres:admin@postgres:5432/otfma"
  }
};
