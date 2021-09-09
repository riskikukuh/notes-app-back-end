const path = require('path');

const routes = (handler) => [
  {
    path: '/upload/images',
    method: 'POST',
    handler: handler.postUploadImageHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
      },
    },
  }, {
    path: '/upload/{param*}',
    method: 'GET',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../uploads/file'),
      },
    },
  },
];

module.exports = routes;
