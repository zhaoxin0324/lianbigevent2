//文章类别相关请求
var category = {
    show: function(callback) {
        $.get(BASEURL.category_show, function(res) {
            callback(res);
        })
    },
    add: function(data, callback) {
        $.post(BASEURL.category_add, data, function(res) {
            callback(res)
        })
    },
    del: function(data, callback) {
        $.post(BASEURL.category_del, data, function(res) {
            callback(res)
        })
    }
}