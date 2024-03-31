'use strict';

describe('Controller: RestaurantsViewController', function () {

  // load the controller's module
  beforeEach(module('ofosApp'));

  var RestaurantsViewController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestaurantsViewController = $controller('RestaurantsViewController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RestaurantsViewController.awesomeThings.length).toBe(3);
  });
});
