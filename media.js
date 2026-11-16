/*
  Add screenshots, GIFs, and MP4 clips here after placing the files under assets/media/.

  Each gallery is an array inside window.PORTFOLIO_MEDIA:
    sloppy   -> Sloppy Dungeon
    quick    -> Quick, Hide the Booze!
    solarian -> Solarian

  Supported entries:
    { type: "image", src: "assets/media/sloppy/room.webp", alt: "Describe the image", caption: "Room design" }
    { type: "gif", src: "assets/media/sloppy/combat.gif", alt: "Describe the action", caption: "Combat loop" }
    { type: "video", src: "assets/media/sloppy/boss.mp4", poster: "assets/media/sloppy/boss.webp", alt: "Describe the clip", caption: "Boss fight" }
    { type: "youtube", id: "YOUTUBE_VIDEO_ID", poster: "assets/cover-sloppy.svg", alt: "Describe the clip", caption: "Gameplay video" }

  "cover" uses the same src/alt/caption fields as "image". The current covers are
  portfolio illustrations, not game screenshots. Replace or follow them with your
  real gameplay media. Keep file names lowercase and avoid spaces for easier URLs.
*/
window.PORTFOLIO_MEDIA = {
  sloppy: [
    {
      type: "cover",
      src: "assets/cover-sloppy.svg",
      alt: "Illustrated portfolio cover for Sloppy Dungeon",
      caption: "Illustrated cover art"
    },
    {
      type: "youtube",
      id: "G7Oo46WxifE",
      poster: "assets/cover-sloppy.svg",
      alt: "Open the Sloppy Dungeon closed-beta gameplay clip",
      caption: "Closed-beta gameplay clip"
    }
  ],
  quick: [
    {
      type: "image",
      src: "assets/media/quick/quick-title.png",
      alt: "Cover for Quick, Hide the Booze!",
      caption: "Title card for Quick, Hide the Booze!"
    },
        {
      type: "youtube",
      id: "wonXplRT9ao",
      poster: "assets/media/quick/quick-kitty.png",
      alt: "Open the Quick, Hide the Booze! release trailer",
      caption: "Release trailer"
    }
  ],
  solarian: [
    {
      type: "image",
      src: "assets/media/solarian/cover-solarian.png",
      alt: "Cover for Solarian",
      caption: "Title card for Solarian"
    }
  ]
};
