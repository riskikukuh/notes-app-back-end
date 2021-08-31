/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */

exports.up = pgm => {
  pgm.createTable('authentications', {
    token: {
      type: 'TEXT',
      notNull: true,
    },
  });
};

exports.down = pgm => {
  pgm.dropTable('authentications');
};
