module.exports = ({ env }) => ({
    email: {
        provider: 'smtp',
        providerOptions: {
            host: 'smtp.gmail.com', //SMTP Host
            port: 465   , //SMTP Port
            secure: true,
            username: env('GMAIL_USER'),
            password: env('GMAIL_PASS'),
            rejectUnauthorized: true,
            requireTLS: true,
            connectionTimeout: 1
        },
        settings: {
            from: env('GMAIL_USER')
        },
    },
});