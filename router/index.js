const Router = require('koa-router');
const router = new Router();
const login = require('./user/login.js');
router.use('/login', login.routes(), login.allowedMethods());
module.exports = router;