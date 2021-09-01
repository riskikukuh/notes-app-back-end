/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.addColumn('notes', {
    owner: {
      type: 'VARCHAR(50)',
    },
  });
};

exports.down = pgm => {
  pgm.dropColumn('notes', 'owner');
};
