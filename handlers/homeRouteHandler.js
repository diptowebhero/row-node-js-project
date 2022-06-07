//module wrapper

const routeHandlers = {}

routeHandlers.homeRouteHandler = (reqProps,cb)=>{
    cb(200,'This is home page')
}

module.exports = routeHandlers;