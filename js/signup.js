// Generated by CoffeeScript 1.4.0
(function() {

  def_view('LoginApp', 'LoginCtrl', function($scope) {
    var o;
    o = {};
    o.name = '';
    o.user_name = '';
    o.password = '';
    $scope.o = o;
    return $scope.submit = function() {
      return $.postJSON('/j/signup', $scope.o, function(o) {
        return $.alert_success('注册成功', function() {
          return window.location.href = '/signin';
        });
      });
    };
  });

}).call(this);
