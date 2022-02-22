module.exports = ({ env }) => ({
    host: env('HOST', 'pipecode-rest-api.herokuapp.com'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS'),
    },
});