//将接口地址统一管理
var baseUrl = "http://localhost:8000";

var BASEURL = {

    logIn: baseUrl + "/admin/login",

    offSet: baseUrl + "/admin/getuser",

    logOut: baseUrl + "/admin/logout",

    category_show: baseUrl + "/admin/category_search",

    category_add: baseUrl + "/admin/category_add",

    category_del: baseUrl + "/admin/category_delete",
}