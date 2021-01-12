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

  staging: {
    client: 'pg',
    connection: {
      database: 'otfma',
      user:     'postgres',
      password: 'admin'
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: 'otfma',
      user:     'postgres',
      password: 'admin'
    },
  }

};
