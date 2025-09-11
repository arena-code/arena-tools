'use strict';

/**
 * access-token controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::access-token.access-token');
