(function() {
  "use strict";

  angular
    .module("assg2.cities")
    .controller("assg2.cities.CitiesController", CitiesController);

  CitiesController.$inject = ["assg2.cities.City"];

  function CitiesController(City) {
      var vm = this;
      vm.cities;
      vm.city;
      vm.edit   = edit;
      vm.create = create;
      vm.update = update;
      vm.remove = remove;

      activate();
      return;
      ////////////////
      function activate() {
        newCity();
        vm.cities = City.query();
      }

      function newCity() {
        vm.city = new City();
      }
      function handleError(response) {
        console.log(response);
      }
      function edit(object) {
        console.log("selected", object);
        vm.city = object;
      }

      function create() {
        //console.log("creating foo", vm.foo);
        vm.city.$save()
          .then(function(response){
            //console.log(response);
            vm.cities.push(vm.city);
            newCity();
          })
          .catch(handleError);
      }

      function update() {
        //console.log("update", vm.foo);
        vm.city.$update()
          .then(function(response){
            //console.log(response);
        })
        .catch(handleError);
      }

      function remove() {
        //console.log("remove", vm.foo);
        vm.city.$delete()
          .then(function(response){
            //console.log(response);
            //remove the element from local array
            removeElement(vm.cities, vm.city);
            //vm.foos = Foo.query();
            //replace edit area with prototype instance
            newCity();
          })
          .catch(handleError);
      }


      function removeElement(elements, element) {
        for (var i=0; i<elements.length; i++) {
          if (elements[i].id == element.id) {
            elements.splice(i,1);
            break;
          }
        }
      }
  }
})();
