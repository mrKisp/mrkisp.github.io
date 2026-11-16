# Christopher Hunter's portfolio site

A dependency-free, 90s-inspired portfolio for GitHub Pages. Intended URL: https://mrkisp.github.io/

## What's included

- **index.html** - page content and the In progress / Completed projects sections.
- **styles.css** - layout and retro styling.
- **custom.css** - the wallpaper and colors you can change in one place.
- **media.js** - image, GIF, MP4, and YouTube entries for each project's gallery.
- **site.js** - gallery controls.
- **assets/** - illustrated covers, wallpaper, favicon, and a copy of your resume.

The cover illustrations are decorative artwork, not gameplay screenshots. Replace or supplement them with your own media.

## Publish on GitHub Pages

1. Sign in to GitHub as **mrKisp**. Create a new **public** repository named **mrkisp.github.io**. The Pages repository name must be lowercase because your username contains an uppercase letter. Leave the repository empty.
2. Upload the *contents* of this folder to the repository root, including index.html, custom.css, media.js, site.js, styles.css, .nojekyll, and the entire assets folder. Do not upload the ZIP as one file. If your browser will not keep the folder structure, use Git or GitHub Desktop.
3. Open **Settings > Pages** in the repository. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)**. Click **Save**.
4. Visit **https://mrkisp.github.io/**. GitHub says publishing can take up to 10 minutes. In **Settings > Pages**, enable **Enforce HTTPS** when available.
5. Add the site URL to your GitHub profile Website field. You can pin the Pages repository and TeamSix.

Or, after creating the empty repository, run these commands from this folder:

~~~bash
git init
git branch -M main
git add .
git commit -m "Launch portfolio"
git remote add origin https://github.com/mrKisp/mrkisp.github.io.git
git push -u origin main
~~~

For later updates:

~~~bash
git add .
git commit -m "Update portfolio"
git push
~~~

Official instructions: [Pages quickstart](https://docs.github.com/en/pages/quickstart), [publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme).

## Add the GitHub profile overview

A separate file, **GitHub_Profile_README.md**, is provided alongside the site download. Create another public repository named **mrKisp** (matching your GitHub username exactly), add a root file named **README.md**, and paste in the contents of GitHub_Profile_README.md. GitHub will display that README at the top of your profile. Publish the Pages site first so its links work.
## Change your wallpaper and colors

1. Put your own background image or GIF in the assets folder, for example **assets/my-wallpaper.gif**.
2. Open **custom.css** and change the wallpaper line:

~~~css
--wallpaper-image: url("assets/my-wallpaper.gif");
~~~

3. Change **--wallpaper-size** to control the repeating tile. The color variables in custom.css are also yours to edit. They override the defaults in styles.css.
4. Commit and push. The content panels stay opaque so text remains readable over the background.

## Add screenshots, GIFs, and clips

1. Put media in **assets/media/sloppy/**, **assets/media/quick/**, or **assets/media/solarian/**.
2. Open **media.js** and add entries to the matching project's array. Keep the cover entry first if you want it as the initial gallery view. Example:

~~~js
quick: [
  {
    type: "cover",
    src: "assets/cover-quick.svg",
    alt: "Illustrated portfolio cover for Quick, Hide the Booze!",
    caption: "Illustrated cover art"
  },
  {
    type: "image",
    src: "assets/media/quick/cleanup.webp",
    alt: "Dorm room before the cleanup timer ends",
    caption: "Timed cleanup level"
  },
  {
    type: "gif",
    src: "assets/media/quick/throw.gif",
    alt: "Player throwing an item across the dorm room",
    caption: "Long-range throwing mechanic"
  },
  {
    type: "video",
    src: "assets/media/quick/playtest.mp4",
    poster: "assets/media/quick/playtest-poster.webp",
    alt: "Gameplay clip of the trash disposal system",
    caption: "Core disposal loop"
  }
],
~~~

3. Commit and push. Gallery arrows and thumbnails appear automatically when a project has more than one item.

Use **image** for PNG/JPEG/WebP, **gif** for GIF, **video** for MP4, and **youtube** with an id for a YouTube clip. Write alt text that describes what is visible. Use short MP4s for longer motion clips so the page stays quick to load. You can remove the decorative cover entry after adding gameplay media.

## Edit projects

Project text is in **index.html**. Copy an article block to add a project, assign a new project id and gallery key, add that key's array in media.js, and update the visible section count.

Sloppy Dungeon is In progress. Quick, Hide the Booze! is under Completed because your contribution is complete, while its itch.io page may still say In development.

## Preview before publishing

Double-click **index.html** to open it in a browser. The YouTube clip needs internet; the rest of the site works locally. Check desktop and phone widths when adding large media.
