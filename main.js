'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/operation-tool.min.js');
} else {
  module.exports = require('./dist/operation-tool.js');
}