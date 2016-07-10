/*
    Quotes.Microservice Quote API version 1.0.0
    This code is auto-generated.  Any modificaions will be overwritten.
*/

import ajax from '../support/ajax';
import { Promise } from 'es6-promise';
import Auth from '../support/auth';
import Token from './token';
    
        export default (function() {
            var entityOptions = {
                baseUri: '/',
                environment: 'dev-forge'
            };

            var setOptions = function (options) {
                entityOptions.baseUri = options.baseUri || '';

                if (entityOptions.baseUri.length && entityOptions.baseUri[entityOptions.baseUri.length - 1] != '/')
                    entityOptions.baseUri = entityOptions.baseUri + '/';
            };

            var addQuote = function(text, author) {
                var url = entityOptions.baseUri + 'services/Quotes.Microservice/1.0.0/Quote/addQuote';

                if (typeof text !== 'undefined' && text !== null)
                    url += '/' + encodeURIComponent(text);
                if (typeof author !== 'undefined' && author !== null)
                    url += '/' + encodeURIComponent(author);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var fetch = function(id) {
                var url = entityOptions.baseUri + 'services/Quotes.Microservice/1.0.0/Quote/fetch';

                if (typeof id !== 'undefined' && id !== null)
                    url += '/' + encodeURIComponent(id);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var getAll = function() {
                var url = entityOptions.baseUri + 'services/Quotes.Microservice/1.0.0/Quote/getAll';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var getRandomQuote = function() {
                var url = entityOptions.baseUri + 'services/Quotes.Microservice/1.0.0/Quote/getRandomQuote';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };


            return {
                setOptions: setOptions,
                addQuote: addQuote,
                fetch: fetch,
                getAll: getAll,
                getRandomQuote: getRandomQuote
            }
        })();