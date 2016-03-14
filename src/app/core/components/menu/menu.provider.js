(function() {
    'use strict';

    angular
        .module('core.components')
        .provider('MenuProvider', MenuProvider);

    MenuProvider.$inject = [];

    /* @ngInject */
    function MenuProvider() {
        this.$get = function() {
        	return {
        		sayHello: sayHello
        	}
        }

        ////////////////

        function sayHello() {
        	console.log("Hello, World!");
        }
    }
})();