const configSystem = require("../../config/system") 

const authRouter = require("./auth.route")

module.exports = (app) => {
  const ADMIN_PATH = '/' + configSystem.adminPrefix;

  app.use(
    ADMIN_PATH + "/auth", 
    authRouter
  );

}
