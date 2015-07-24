// Generated by CoffeeScript 1.4.0
(function() {
  var editor;

  def_view('NewsApp', 'NewsCtrl', function($scope) {
    var o;
    o = {
      title: '',
      content: ''
    };
    $scope.o = o;
    return $scope.submit = function() {
      return $.postJSON('/j/admin/add_news', $scope.o, function(o) {
        return $.alert_success('保存成功');
      });
    };
  });

  editor = new Simditor({
    upload: {
      fileKey: 'file',
      url: 'http://up.qiniu.com/',
      params: {
        "token": "/j/upload_token"
      }
    },
    textarea: $('#content')
  });

}).call(this);
