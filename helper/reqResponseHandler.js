//dependencies
const url = require("url");
const routes = require("./../routes");
const { notFoundHandler } = require("./../handlers/notFoundHandler");
//module wrapper
const handler = {};

//req & res handler
handler.reqResponseHandler = (req, res) => {
  const method = req.method.toLowerCase();
  const headers = req.headers;
  const urlObj = url.parse(req.url, true);
  const path = urlObj.pathname;
  const formattedPath = path.replace(/^\/+|\/+$/g, "");
  const query = urlObj.query;
  let body = "";

  //
  const reqProps = {
    method,
    headers,
    urlObj,
    path,
    query,
  };

  const acceptableContentType = ["application.json", "text/plain"];

  if (acceptableContentType.includes(headers["content-type"])) {
    const reqDataArray = [];
    req.on("data", (buffer) => {
      reqDataArray.push(buffer);
    });
    req.on("end", () => {
      body += Buffer.concat(reqDataArray);

      const chosenRoute = routes[formattedPath]
        ? routes[formattedPath]
        : notFoundHandler;
      chosenRoute(reqProps,(statusCode,body)=>{
        res.writeHead(statusCode);
        res.end(body)
      });
    });
  } else {
    res.end("this content type is available");
  }

  console.log("welcome to node js server");
};
module.exports = handler;
