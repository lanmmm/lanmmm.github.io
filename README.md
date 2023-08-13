# Welcome to Use DuaCatPalette

---

DuaCatPalette is an original open source theme featuring light-size. It doesn't provide functions of Account Management, Comment Management, Access Data Management and so on. Here, along with the dark theme, you'll get an pure experience of creating and uploading. Don't need care about visitor volume, criticism or any other factor comes from your visitors or fans. Of course, you are not completely isolated. I have left you some interfaces to set up links to your account on other social platforms.

This is my own site, using this theme as a demo.

[duawiehspace.top](https://duawieh.github.io)

---



# Deploy your site with DuaCatPalette theme



## Do something for preparations

First of all, fork my repository and pull it to your local computer storage. This is a basic step which makes you're able to edit the source code and cofig files.

Another basic step is, to create a new repository titled with `username.github.io`, by the way, the `username` is the ID of your GitHub account. **Attention, your repository must have the form of this, which means you are applying for a GitHub Pages service.**

And the last basic step is to push all the files to your new repository. Every time you push it, GitHub Pages will recompile and redeploy them with Jekyll. The result will be performed at `https://username.github.io`, or the error information will be sent to your e-mail.



## Configure your site information

**All the config files you need to edit are in folder config and contents.**



### Configure Icons

Icons are under the folder `config/Global_Icon/`. There are three icons respectively stand for your avatar, the background image of homepage, and the icon at the left side of top bar. You can replace them with your own icons. **Make sure that your images have been renamed to the same name as them.**



### Configure Profiles

Your profile information is written in `config/aboutME.json`, edit it at the same form below:

```json
{
    "Title": "Title",   // [any string] the title of your site
    "Author": "NAME",	// [any string] your name
    "E-mail": [			// [an array of e-mail address] your e-mail address
    	"emailaddress1@email.com",
        "emailaddress2@email.com"
        // ...
    ],
    "link": [			// [an array of links] some links to your account page on other plateforms
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

I have prepared eight common icons for you in `config/Link_Icon`，you can also make more images if necessary.



### Post new contents

Contents are contained in the folder `contents/`, you can post two type of content, blogs and projects. There are two steps to post a new blog(The same as to post a new project):

- prepare a new **markdown file** and an image as cover, make sure that the url of the two are accessible.
- edit `contents/blogs/config.json` at the same form as this:

```json
[
    {
        "index": "blg0000000001",				// a unique indentifier begin with "blg" or "prj"
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
