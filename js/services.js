app.factory('TeaList', ['$http', '$q', function ($http, $q) {
  var teas = {}
  teas.get = function () {
    var deferred = $q.defer()
    $http.get('data/tea.json').success(function (data) {
      deferred.resolve(data)
    }).error(function () {
      deferred.reject('Error!')
    })
    return deferred.promise
  }
  return teas
}])

app.factory('Cart', function () {
  var shoppingCart = {}
  shoppingCart['tea'] = []
  shoppingCart.addTea = function (teaObj, quantity) {
    quantity = parseInt(quantity, 10)
    var teaIndex = shoppingCart['tea'].map(function (obj) {return obj['name']}).indexOf(teaObj['name'])
    if (teaIndex === -1) {
      teaObj.quantity = quantity
      shoppingCart['tea'].push(teaObj)
    } else {
      shoppingCart['tea'][teaIndex].quantity += quantity
    }
  }
  shoppingCart.removeTea = function (teaObj) {
    var teaIndex = shoppingCart['tea'].map(function (obj) {return obj['name']}).indexOf(teaObj['name'])
    shoppingCart['tea'].splice(teaIndex, 1)
  }
  return shoppingCart
})

//make one s
