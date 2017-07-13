/**
 * Created by YUN on 8/6/17.
 *
 */
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mock.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add custom routes before JSON Server router
server.use(jsonServer.bodyParser);

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})