const http = require('http');
const port = Number(process.env.PORT || 3000);

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', app: 'devspaces-extensions-test', port }));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
