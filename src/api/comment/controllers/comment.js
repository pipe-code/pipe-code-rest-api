'use strict';

/**
 *  comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({ strapi }) =>  ({
    async create (ctx) {

        // Get Post data
        const { Post } = ctx.request.body.data;

        // Create comment
        const response = await super.create(ctx);
        
        // Response post name to users
        await strapi.emitToAllUsers( Post );

        return response;
    }
}));
