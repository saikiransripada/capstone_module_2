(function() {
  "use strict";

  angular
    .module("assg2.cities")
    .directive("sdCities", CitiesDirective)
    .directive("formCities", FormCitiesDirective);

  FormCitiesDirective.$inject = ["assg2.APP_CONFIG"];
  CitiesDirective.$inject = ["assg2.APP_CONFIG"];

  function FormCitiesDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.form_html,
        replace: true,
        bindToController: true,
        controller: "assg2.cities.CitiesController",
        controllerAs: "citiesVM",
        restrict: "E",

    };
    return directive;
  }

  function CitiesDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.cities_html,
        replace: true,
        restrict: "E",
    };
    return directive;

  }

})();
