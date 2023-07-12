const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    const read = fs
      .readFileSync("message.text")
      .toString("UTF8")
      .split("")
      .join("")
      .toString();
    console.log(read);
    res.write("<html>");
    res.write(`<h2>${read}</h2>`);
    res.write(
      ` <form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body> `
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=");
      fs.writeFile("message.text", message[message.length - 1], () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body> Sorry!!!! Wrong request</body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

//  module.exports = {handler:requestHandler}

//  exports.handler = requestHandler
