const app = require('./app.js');
const config = require('./config/configBasic');
const http = require('http');
const process = require('process');

// const Port = process.env.SERVER_PORT || 8080;

// app.set('port', Port);
// const httpServer = http.createServer(app);

// let server = httpServer.listen(Port, () => {
//   console.log('Server running on port ', Port);
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`express is connected with ${PORT}`);
});

process.on('SIGINT', function () {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  //  some other closing procedures go here
  process.exit(0);
});
