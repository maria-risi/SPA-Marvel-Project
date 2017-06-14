"use strict";

angular.module('config', [])

.constant('api_config', {
    name:'api_config',
    url:'https://gateway.marvel.com:443/v1/public',
    key:'?ts=1&apikey=6411b2aeee3ce868780aa82c2920f601&hash=bac85b5e696e18a2869e1dde96f89f15',
    apiKey:'6411b2aeee3ce868780aa82c2920f601',
    privateKey: 'd5244a6570cfe0f59acda02ffeaf93c3536fe858',
    ts: '1',
    hash: 'bac85b5e696e18a2869e1dde96f89f15'
});
