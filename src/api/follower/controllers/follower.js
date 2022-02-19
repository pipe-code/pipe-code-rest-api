'use strict';

/**
 *  follower controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const slugify = require('slugify');

module.exports = createCoreController('api::follower.follower', ({ strapi }) =>  ({

    async create (ctx) {

        const randomCharacters = (length) => {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        

        let newData = ctx.request.body.data;
        const { Nickname, Email } = ctx.request.body.data;

        newData = { 
            ...newData, 
            UserID: slugify(Nickname + `_${randomCharacters(8)}`, '_'), 
            Nickname: slugify(Nickname),
            AccessToken: randomCharacters(20)
        }

        await strapi.plugins['email'].services.email.send({
            to: Email,
            from: 'pipecode.info@gmail.com',
            subject: 'Use strapi email provider successfully',
            html: 'Hello world!'
        });


        return await strapi.api.follower.services.follower.create({ data: newData });
    }
}));
