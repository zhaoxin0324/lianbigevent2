//将接口地址统一管理
var baseUrl = "http://localhost:8000";

var BASEURL = {

    logIn: baseUrl + "/admin/login",

    offSet: baseUrl + "/admin/getuser",

    logOut: baseUrl + "/admin/logout",
    // 文章类别接口
    category_show: baseUrl + "/admin/category_search",

    category_add: baseUrl + "/admin/category_add",

    category_del: baseUrl + "/admin/category_delete",

    category_edit: baseUrl + "/admin/category_edit",
    // 文章类接口
    article_show: baseUrl + "/admin/search",

    article_del: baseUrl + "/admin/article_delete",

    article_rel: baseUrl + "/admin/article_publish",

    article_edit: baseUrl + "/admin/article_edit",
}