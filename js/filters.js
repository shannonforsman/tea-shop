app.filter('teaSum', function () {
  return function (input) {
    var total = input.reduce(function(prev, next) {
      console.log('prev', prev)
      console.log('next', next)
      return prev + (next['quantity'] * next['price']/100)
    }, 0)
    return total;
  }
})
