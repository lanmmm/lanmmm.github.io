// 用户选择的标签集合
var Set_checked_tag = new Set();
// 用户输入的字符串
var String_checked_name = "";
// 直接从 json 读取的 content 列表
var lst_source = new Array();
// 解析后获得的去重 tag 列表
var lst_tag = new Array();

// 关闭 jQuery 异步执行
$.ajaxSettings.async = false;
// 读取 json 配置文件，获取 content 列表
$.getJSON("/contents/projects/config.json", function(data) { lst_source = data; });
// 开启 jQuery 异步执行
$.ajaxSettings.async = true;