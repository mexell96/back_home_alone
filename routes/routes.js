const modelsRoutes = require("./models");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });
  modelsRoutes(app, fs);
};

module.exports = appRouter;
