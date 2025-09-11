"use strict";

module.exports = async (ctx, config, { strapi }) => {
  const allowedFields = ["deviceId"];

  if (ctx.request.method === "PUT" || ctx.request.method === "PATCH") {
    const sentFields = Object.keys(ctx.request.body?.data || {});
    const invalid = sentFields.filter((f) => !allowedFields.includes(f));

    if (invalid.length > 0) {
      return ctx.unauthorized(
        `You can only update: ${allowedFields.join(", ")}`
      );
    }
  }

  return true;
};
