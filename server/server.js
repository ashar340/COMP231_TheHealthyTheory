const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));
const server = http.createServer(app);
server.listen(port);

