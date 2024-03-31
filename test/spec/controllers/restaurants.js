'use strict';

describe('Controller: RestaurantsController', function () {

  // load the controller's module
  beforeEach(module('ofosApp'));

  var RestaurantsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestaurantsController = $controller('RestaurantsController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RestaurantsController.awesomeThings.length).toBe(3);
  });
});
