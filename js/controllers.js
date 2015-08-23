app.controller('HomeController', ['$scope', 'TeaList', 'Cart', function ($scope, TeaList, Cart) {
  $scope.quantity = 1;
  $scope.teasInCart = Cart.tea
  // console.log(Cart.tea)
  // $scope.CartItems = Cart.tea.length
  // console.log($scope.CartItems)
  TeaList.get().then(function (teas) {
    $scope.teaArr = teas
  })
  $scope.addToCart = function (obj, quantity) {
    Cart.addTea(obj, quantity)
  }
}])

app.controller('CartController', ['$scope', 'Cart', function ($scope, Cart) {
  $scope.teas = Cart.tea
  $scope.total = 0
  $scope.remove = function (key) {
    $scope.tea = Cart.removeTea(key)
  }
}])
