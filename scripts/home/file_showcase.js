const NONE_COVER = "data:image/png;base64,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";

$.getJSON("/contents/homepageShowcase/config.json", function(data) {
    let showcase_title = new Array();
    let showcase_subtitle = new Array();
    let showcase_link = new Array();
    let showcase_cover = new Array();
    showcase_title[0] = document.getElementById("homepageCenterShowcaseTitle_Title");
    showcase_subtitle[0] = document.getElementById("homepageCenterShowcaseTitle_Subtitle");
    showcase_link[0] = document.getElementById("homepageCenterShowcase_Link");
    showcase_cover[0] = document.getElementById("homepageCenterShowcase_Cover");
    showcase_title[1] = document.getElementById("homepageLeftShowcaseTitle_Title");
    showcase_subtitle[1] = document.getElementById("homepageLeftShowcaseTitle_Subtitle");
    showcase_link[1] = document.getElementById("homepageLeftShowcase_Link");
    showcase_cover[1] = document.getElementById("homepageLeftShowcase_Cover");
    showcase_title[2] = document.getElementById("homepageRightShowcaseTitle_Title");
    showcase_subtitle[2] = document.getElementById("homepageRightShowcaseTitle_Subtitle");
    showcase_link[2] = document.getElementById("homepageRightShowcase_Link");
    showcase_cover[2] = document.getElementById("homepageRightShowcase_Cover");

    $.each(data, function(i, info) {
        let content_index = info["index"];
        let content_type = content_index.substring(0, 3);
        let content;
        
        // 关闭 jQuery 异步执行
        $.ajaxSettings.async = false;
        
        if (content_type == "blg") {
            $.getJSON("/contents/blogs/config.json", function(data) {
                $.each(data, function(j, jnfo) {
                    if (jnfo["index"] == content_index) {
                        content = jnfo;
                        return false;
                    }
                });
            });
        }
        else
        if (content_type == "prj") {
            $.getJSON("/contents/projects/config.json", function(data) {
                $.each(data, function(j, jnfo) {
                    if (jnfo["index"] == content_index) {
                        content = jnfo;
                        return false;
                    }
                });
            });
        }
        
        // 开启 jQuery 异步执行
        $.ajaxSettings.async = true;

        showcase_title[i].innerHTML = info["title"];
        showcase_subtitle[i].innerHTML = info["subtitle"];
        showcase_link[i].href = "/content?" + content_index;
        if (content.cover == undefined || content.cover == null) {
            showcase_cover[i].src = NONE_COVER;
        }
        else {
            showcase_cover[i].src = content.cover;
        }
    });
});