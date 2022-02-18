module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8aeeec478caf7274b6ea7e192d2a247'),
  },
});
