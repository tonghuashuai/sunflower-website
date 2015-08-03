// Generated by CoffeeScript 1.4.0
(function() {
  var editor;

  editor = new Simditor({
    upload: {
      fileKey: 'file',
      url: 'http://up.qiniu.com/',
      params: {
        "token": "/j/upload_token"
      }
    },
    textarea: $('#content'),
    toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'color', 'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'hr', 'indent', 'outdent', 'alignment'],
    toolbarFloat: true,
    toolbarFloatOffset: 50
  });

  window.def_news = function(o) {
    if (o.img) {
      $('#img-preview').css('background-image', "url(" + CONST.QINIU_HOST + "/" + o.img + "?imageView2/1/w/436/h/436)");
      $('#img-preview').addClass('preview');
    }
    if (o.content) {
      editor.setValue(o.content);
    }
    return def_view('NewsApp', 'NewsCtrl', function($scope) {
      $scope.o = o;
      $scope.percent = 0;
      return $scope.submit = function() {
        V().o.content = editor.getValue();
        V().$apply();
        return $.postJSON('/j/admin/add_news', $scope.o, function(o) {
          return $.alert_success('保存成功');
        });
      };
    });
  };

  $('#img_up').uploader({
    uploading: function(percent) {
      V().percent = percent;
      V().$apply();
      if (percent === 100) {
        return percent = 0;
      }
    },
    uploaded: function(id, url) {
      V().o.img = id;
      V().$apply();
      $('#img-preview').css('background-image', "url(" + url + "?imageView2/1/w/436/h/436)");
      return $('#img-preview').addClass('preview');
    },
    error: function(up, err, errTip) {
      return console.log(errTip);
    }
  });

}).call(this);
