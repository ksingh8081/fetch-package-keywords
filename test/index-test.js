const assert = require('assert');
const fetch = require('../index.js');

describe('fetch keywords', function () {
    describe('#valid package', function () {
        it('should return non empty array', function (done) {
            fetch('express').then((keywords) => {
                assert.ok(keywords.length > 0);
                assert.ok(keywords.includes('api'));
                done();
            }).catch(() => { });
        });
    });
});

describe('fetch keywords', function () {
    describe('#package does not exist', function () {
        it('should return empty array', function (done) {
            fetch('xy-yz').then((keywords) => {
                assert.fail('should not be here');
                done();
            }).catch((error) => {
                assert.ok(error);
                done();
            });
        });
    });
});

describe('fetch keywords', function () {
    describe('#timeout option', function () {
        it('should return', function (done) {
            fetch('express', { timeout: 2000 }).then((keywords) => {
                assert.ok(keywords.length > 0);
                done();
            }).catch(() => { });
        });
    });
});


