// article中的请求

var article = {
    show: function(data, callback) {
        $.ajax({
            type: "get",
            data: data,
            url: BASEURL.article_show,
            success: function(res) {
                callback(res);
            }
        })
    },
    del: function(data, callback) {
        $.get(BASEURL.article_del, data, function(res) {
            callback(res);
        })
    },
    rel: function(data, callback) {
        $.ajax({
            type: "post",
            data: data,
            processData: false, // 不要让jquery去处理formData数据
            contentType: false, // 不设置默认的请求头
            url: BASEURL.article_rel,
            success: function(res) {
                callback(res);
            }
        })
    },
    edit: function(data, callback) {
        $.ajax({
            type: "post",
            data: data,
            processData: false, // 不要让jquery去处理formData数据
            contentType: false, // 不设置默认的请求头
            url: BASEURL.article_edit,
            success: function(res) {
                callback(res);
            }
        })
    }
}