'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::license.license', {
  config: {
    update: {
      policies: ['global::can-edit-only-deviceId'],
    },
  },
});
