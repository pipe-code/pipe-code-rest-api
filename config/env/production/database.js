module.exports = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', 'us-cdbr-east.cleardb.com'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'heroku_4e92ecd80c2b874'),
            user: env('DATABASE_USERNAME', 'bfaeb3179d58d8'),
            password: env('DATABASE_PASSWORD', '48584ed0'),
            ssl: {
                rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
            },
        },
        debug: false,
    },
});