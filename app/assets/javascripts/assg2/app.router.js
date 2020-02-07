(function() {
  "use strict";

  angular
    .module("assg2")
    .config(RouterFunction);

  RouterFunction.$inject = ["$stateProvider",
                            "$urlRouterProvider",
                            "assg2.APP_CONFIG"];

  function RouterFunction($stateProvider, $urlRouterProvider, APP_CONFIG) {
    $stateProvider
    .state("home",{
      url: "/",
      templateUrl: APP_CONFIG.main_page_html,
      // controller: ,
      // controllerAs: ,
    })

    $urlRouterProvider.otherwise("/");
  }
})();
