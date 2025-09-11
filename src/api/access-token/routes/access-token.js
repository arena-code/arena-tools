'use strict';

/**
 * access-token router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::access-token.access-token');
