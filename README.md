# Welcome to Use DuaCatPalette

---

DuaCatPalette is an original open source theme featuring light-size. It doesn't provide functions of Account Management, Comment Management, Access Data Management and so on. Here, along with the dark theme, you'll get an pure experience of creating and uploading. Don't need care about visitor volume, criticism or any other factor comes from your visitors or fans. Of course, you are not completely isolated. I have left you some interfaces to set up links to your account on other social platforms.

DuaCatPalette是一个以轻量化为特色的原创的开源主题。不提供有关账号管理、评论管理、访问数据管理等的功能。在这里，在暗色的主题中，你会获得一个纯粹的创作和上传的体验。不需要关心访问量，评论或任何其他来自你的访问者或粉丝的因素。当然，你并没有完全与世隔绝。我为你留下了一些接口，可以设置你在其他社交平台上的账户的链接。

This is my own site, using this theme as a demo.

这是应用了这个主题的我自己的站点，作为一个样板。

[duawiehspace.top](https://duawieh.github.io)

---



# Deploy your site with DuaCatPalette theme



## Do something for preparations

First of all, fork my repository and pull it to your local computer storage. This is a basic step which makes you're able to edit the source code and cofig files.

首先，fork 我的 repo 并将其拉取到您的本地计算机存储。这是一个基本步骤，它使您能够编辑源代码和配置文件。

Another basic step is, to create a new repository titled with `username.github.io`, by the way, the `username` is the ID of your GitHub account. **Attention, your repository must have the form of this, which means you are applying for a GitHub Pages service.**

另一个基本步骤是创建一个名为 `username.github.io` 的新的 repo。顺便说一下，`username` 是您的 GitHub 账户的 ID。**注意，您的这个 repo 必须具有此形式的名称，这意味着您正在申请 GitHub Pages 服务。**

And the last basic step is to push all the files to your new repository. Every time you push it, GitHub Pages will recompile and redeploy them with Jekyll. The result will be performed at `https://username.github.io`, or the error information will be sent to your e-mail.

最后一个基本步骤是将所有文件 push 到新的 repo。每次 push 后，GitHub Pages 都会通过 Jekyll 重新编译并重新部署它们。结果将在 `https://username.github.io` 呈现，否则错误信息将发送到您的电子邮箱。



## Configure your site information

**All the config files you need to edit are in folder config and contents.**

**所有需要编辑的配置文件都在 config 和 contents 文件夹中。**



### Configure Icons

Icons are under the folder `config/Global_Icon/`. There are three icons respectively stand for your avatar, the background image of homepage, and the icon at the left side of top bar. You can replace them with your own icons. **Make sure that your images have been renamed to the same name as them.**

图标位于 `config/Global_Icon/` 文件夹下。有三个图标分别代表您的头像，主页的背景图像和顶部栏左侧的图标。您可以用自己的图标替换它们。**请确保您的图像已被重命名为与它们相同的名称。**



### Configure Profiles

Your profile information is written in `config/aboutME.json`, edit it at the same form below:

您的个人资料信息被编写在 `config/aboutME.json` 中，请按下面的格式重新编辑它:

```json
{
    "Title": "Title",   // [any string] the title of your site
    "Author": "NAME",	// [any string] your name
    "E-mail": [			// [an array of e-mail address] your e-mail address
    	"emailaddress1@email.com",
        "emailaddress2@email.com"
        // ...
    ],
    "link": [
        {
            "icon": "images url",	// [a url] the url of icon
            "url": "link href",		// [a url] the url you want to link to
            "alt": "name"			// [any string] the alternate name you want to show
        },
        {
            "icon": "images url",
            "url": "link href",
            "alt": "name"
        }
        // ...
    ],
    "Profile": "your profile content.",					// [any string] your profile
    "AboutTheSite": "The profile content of your site."	// [any string] About the site
}
```

If the json file you edited has worked, it will be performed below the homepage。

如果您编辑的 json 文件生效了，它将在主页下方呈现。

I have prepared eight common icons for you in `config/Link_Icon`，you can also make more images if necessary.

我在 `config/Link_Icon/` 中为您准备了八个常用的图标，如果需要，您也可以制作更多这样的图像。



### Post new contents

Contents are contained in the folder `contents/`, you can post two type of content, blogs and projects. There are two steps to post a new blog(The same as to post a new project):

- prepare a new **markdown file** and an image as cover, make sure that the url of the two are accessible.
- edit `contents/blogs/config.json` at the same form as this:

content 包含在 Contents 文件夹中，您可以发布两种类型的内容，blogs 和 projects。发布一个新的 blog 有两个步骤（发布 project 时与之相同）:

- 准备一个新的 **markdown文件** 和一张图片作为封面，确保两者的 url 是可访问的。
- 编辑 `contents/blogs/config.json`，格式如下:

```json
[
    {
        "index": "blg0000000001",				// the unique indentifier begin with "blg" or "prj"
        "title": "the Title of the Content",	// [any string] The title
        "subtitle": "Give a brief introduction",// [any string] The subtitle
        "cover": "url of the cover",			// [a url or null] the link to the cover, or NULL is okay
        "date": "YYYY.MM.DD | hh:mm",			// Upload date
        "tags": ["tag1", "tag2", "tag3"],		// [an array of any string] tags
        "url": "contents/blogs/0000000001.md"	// [a url] the link to the markdown file
    },
    {
        "index": "blg0000000000",
        "title": "the Title of the Content",
        "subtitle": "Give a brief introduction",
        "cover": "url of the cover",
        "date": "YYYY.MM.DD | HH:MM",
        "tags": ["tag1", "tag2", "tag3"],
        "url": "contents/blogs/0000000000.md"
    }
    // ...
]
```



### Replace the homepage showcase

There a three showcase in homepage. Edit `contents/homepageShowcase/config.json` to replace the contents on the showcases.Please edit as follows:

主页上有三个展示窗。编辑 `contents/homepageShowcase/config.json` 来替换展示窗中的 content。请按如下格式编辑：

```json
[
    {
        "title": "Center showcase title", 
        "subtitle": "Center showcase subtitle", 
        "index": "blg0000000000"					// the unique indentifier begin with "blg" or "prj"
    },
    {
        "title": "Left showcase title", 
        "subtitle": "Left showcase subtitle", 
        "index": "blg0000000001"					// the unique indentifier begin with "blg" or "prj"
    },
    {
        "title": "Right showcase title", 
        "subtitle": "Right showcase subtitle", 
        "index": "blg0000000002"					// the unique indentifier begin with "blg" or "prj"
    }
]
```



---

Now you have complete all the configuration! You can start running your website now! If you like my theme, give me a star please.

现在您已经完成了所有的配置工作！您现在可以开始经营您的网站了！如果您喜欢我的主题，请为我点亮星标。
