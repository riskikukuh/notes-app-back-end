const InvariantError = require('../../api/notes/exceptions/InvariantError');
const {
  ImageHeadersSchema,
} = require('./schema');

const UploadsValidator = {
  validateHeadersImage: (headers) => {
    const validationResult = ImageHeadersSchema.validate(headers);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UploadsValidator;
