module.exports = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', 'eanl4i1omny740jw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'fzdssd220uhay00u'),
            user: env('DATABASE_USERNAME', 'e8sks4qher6u1or6'),
            password: env('DATABASE_PASSWORD', 'mm6nnvc7f3qmw3ap'),
            ssl: {
                rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
            },
        },
        debug: false,
    },
});