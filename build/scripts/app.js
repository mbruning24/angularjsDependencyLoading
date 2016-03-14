(function() {
    'use strict';

    angular
        .module('core.components', [
        ]);
})();
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
(function() {
    'use strict';

    angular
        .module('conf.mods', [
        	'conf.mods.dash'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('core', [
        	'core.components'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('conf', [
            'core',
            'conf.mods'
        ]);
})();