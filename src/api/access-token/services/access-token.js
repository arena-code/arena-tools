'use strict';

/**
 * access-token service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::access-token.access-token');
