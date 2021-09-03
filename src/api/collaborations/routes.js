const routes = (handler) => [
  {
    path: '/collaborations',
    method: 'POST',
    handler: handler.postCollaborationHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  }, {
    path: '/collaborations',
    method: 'DELETE',
    handler: handler.deleteCollaborationHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
];

module.exports = routes;
