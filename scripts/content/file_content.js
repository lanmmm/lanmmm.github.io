var content;

var content_path = window.location.search;
var content_type = content_path.substring(1, 4);
var content_path = content_path.substring(1, content_path.length);

// 关闭 jQuery 异步执行
$.ajaxSettings.async = false;

if (content_type == "blg") {
    $.getJSON("/contents/blogs/config.json", function(data) {
        $.each(data, function(i, info) {
            if (info["index"] == content_path) {
                content = info;
                return false;
            }
        });
    });
}
else
if (content_type == "prj") {
    $.getJSON("/contents/projects/config.json", function(data) {
        $.each(data, function(i, info) {
            if (info["index"] == content_path) {
                content = info;
                return false;
            }
        });
    });
}

// 开启 jQuery 异步执行
$.ajaxSettings.async = true;

if (content == undefined) {
    alert("您查询的 content 不存在！\nThe requested content is not found!");
    window.location.href = "index.html";
}