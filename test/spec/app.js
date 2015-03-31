describe('Unit testing Examples', function () {

  // load the controller's module
  beforeEach(
    module('yeomanTest1App')
  );

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have a MainCrl', function () {
    expect(MainCtrl).toBeDefined();
  })

});
