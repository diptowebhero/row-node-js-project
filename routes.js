//dependencies
const { homeRouteHandler } = require("./handlers/homeRouteHandler");
const { aboutRouteHandler } = require("./handlers/aboutRouteHandler");

const routes = {
  home: homeRouteHandler,
  about: aboutRouteHandler,
};

module.exports = routes;
