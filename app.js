const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  if (url == "/home") {
    res.write("<body> Welcome Home </body>");
  } else if (url == "/about") {
    res.write("<body> Welcome to about us page </body>");
  } else if (url == "/node") {
    res.write("<body> Welcome to my Node JS project </body>");
  } else {
    res.write("<body> Sorry!!!! Wrong request</body>");
  }
  res.write("</html>");
  res.end();
});
console.log("Neeraj");
server.listen(4000);
