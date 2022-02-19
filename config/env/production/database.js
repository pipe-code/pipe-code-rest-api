module.exports = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', 'databases.000webhost.com'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'id18487158_pipecoderestapi'),
            user: env('DATABASE_USERNAME', 'id18487158_pipecodeguard'),
            password: env('DATABASE_PASSWORD', 'O1g[umAkU{1yR~PG'),
            ssl: {
                rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
            },
        },
        debug: false,
    },
});