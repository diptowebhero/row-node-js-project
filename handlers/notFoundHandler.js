//module wrapper
const routeHandlers = {};

routeHandlers.notFoundHandler = (reqProps,cb) => {
  cb(404,'This page is not found')
};

module.exports = routeHandlers;
