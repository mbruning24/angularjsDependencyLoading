(function() {
    'use strict';

    angular
        .module('conf.mods.dash')
        .config(DashConfig);

    DashConfig.$inject = [];

    /* @ngInject */
    function DashConfig() {
    	console.log("Config Dash Loaded...");
    }

    // THE CONFIG SETUP BELOW DOES NOT WORK

    // DashConfig.$inject = ['MenuProvider'];

    /* @ngInject */
    /*function DashConfig(MenuProvider) {
    	MenuProvider.sayHello();   
    }*/
})();