'use strict';

const RegClient = require('silent-npm-registry-client');
const client = new RegClient();

module.exports = (packageName, options) => {
    if (!options)
        options = { timeout: 1000 };


    return new Promise((resolve, reject) => {
        client.get('https://registry.npmjs.org/' + packageName, options, function (error, data, raw, res) {
            if (error)
                reject(error);

            var p = JSON.parse(raw);
            resolve(p.keywords ? p.keywords : []);
        });
    });
};;