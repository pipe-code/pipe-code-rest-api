module.exports = ({ env }) => ({
    host: env('HOST', 'pipecode-rest-api.herokuapp.com'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array("APP_KEYS", ["1dc7ffcca6136ed542b89318e5f22501", "d598da162aac4be59534f231ad287acc"]),
    },
});