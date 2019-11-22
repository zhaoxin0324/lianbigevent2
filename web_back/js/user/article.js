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
    }
}