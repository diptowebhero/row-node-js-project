//module wrapper
const routeHandlers = {}

routeHandlers.aboutRouteHandler = (reqProps,cb)=>{
    cb(200,'This is about page')
}

module.exports = routeHandlers;