(function() {
    'use strict';

    angular
        .module('conf.mods.dash', [
        ])
        .run(function(MenuProvider) { 
        	// THIS WORKS
        	MenuProvider.sayHello(); 
        });
})();