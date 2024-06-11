const server = require('./api/server.js');
const { PORT } = require('./api/vars');

server.listen(PORT, () => {
  console.log(`\n === Server listening on port ${PORT} === \n`);
});