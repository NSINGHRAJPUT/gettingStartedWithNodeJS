const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body> Neeraj </body>");
  res.write("</html>");
});
console.log("Neeraj");
server.listen(4000);
