// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//     app.use(proxy('/api/blogusers', 
//         { target: 'http://localhost:3001/' }
//     ));
// }

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true
    })
  );
};