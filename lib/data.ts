import type { Work, NavLink } from "@/types/site";

export const navLinks: NavLink[] = [
  { label: "Music", href: "/music" },
  { label: "Bio / EPK", href: "/epk" },
  { label: "Contact", href: "/contact" },
];

export const works: Work[] = [
  {
    id: "foodman-246",
    title: "FOODMAN - 246 feat. Ryuw",
    year: 2019,
    role: "Producer / Artist / Composer",
    category: "Artist",
    style: ["Electronic", "Bass Music"],
    description:
      'In 2019, he released the collaboration track "246" with Foodman from Diplo\'s label MAD DECENT, entering the playlist of Best Electronic music selected by Resident Advisor magazine.',
    descriptionJa:
      "2019年、Diplo率いるレーベルMAD DECENTから食品まつり a.k.a foodmanのコラボ曲「246」をリリース。Resident Advisor誌が選ぶBEST Electronic musicのプレイリストに選出。",
    note: "Released via Mad Decent",
    reviewQuote:
      '"Only \'246,\' a collaboration with the Tokyo producer Ryuw, sounds like it belongs on Mad Decent. It\'s loaded with the kind of exaggerated sounds you hear in big-room trap, but, alongside roaring lions and electric guitars, \'246\' resembles an EDM banger."',
    reviewSource: "Resident Advisor",
    reviewLink: "https://ja.ra.co/reviews/23635",
    listenLink: "https://soundcloud.com/maddecent/sets/foodman-odoodo",
    featured: true,
  },
  {
    id: "dct-saa-kane",
    title: "DREAMS COME TRUE - さあ鐘を鳴らせ (YO-SIN & Ryuw REMIX)",
    year: 2020,
    role: "Producer / Remixer",
    category: "Remix",
    style: ["Electronic", "Bass"],
    description:
      'He has worked on a bass music remix for DREAMS COME TRUE, one of Japan\'s most respected music acts, collaborating with YO-SIN on "Saa Kane wo Narase (YO-SIN & Ryuw REMIX)."',
    descriptionJa:
      "DREAMS COME TRUEの「さあ鐘を鳴らせ」を、YO-SINとの共作によりベースミュージック・リミックスとして手掛けました。",
    note: "Produced by YO-SIN × Ryuw / Piano: Miyuki Ito",
    reviewSource: "BARKS",
    reviewLink: "https://barks.jp/news/892815/",
    listenLink:
      "https://store.universal-music.co.jp/products/umck1674",
    featured: true,
  },
  {
    id: "glay-seoul-opening-film",
    title: "GLAY - 25th Anniversary Special Live in Seoul at KBS ARENA 2019.6.30 / Live Opening Film Music",
    year: 2019,
    role: "Composer / Sound Director",
    category: "Brand / Film",
    style: ["Electronic", "Cinematic"],
    description:
      'Provided music for the live opening film of GLAY\'s "25th Anniversary Special Live in Seoul at KBS ARENA 2019.6.30," included on the Blu-ray & DVD edition of "REVIEW II ~BEST OF GLAY~."',
    descriptionJa:
      'GLAY「25th Anniversary Special Live in Seoul at KBS ARENA 2019.6.30」のライブオープニングFILMに楽曲を提供。Blu-ray & DVD版「REVIEW II ~BEST OF GLAY~」に収録。',
    listenLink: "https://info.glay.co.jp/review2/",
    featured: true,
  },
  {
    id: "one-piece-bustercall-166",
    title: "ONE PIECE - BUSTERCALL Project No.166 / Film Music",
    year: 2020,
    role: "Composer / Sound Director",
    category: "Game / Anime",
    style: ["Electronic", "Cinematic", "Bass"],
    description:
      'Provided music for No.166 of the "ONE PIECE" BUSTERCALL Project, a video work by THE DIY centered around the Impel Down arc.',
    descriptionJa:
      '「ONE PIECE」BUSTERCALL Project No.166、THE DIYによるImpel Downをテーマにした映像作品に楽曲を提供。',
    listenLink: "https://www.instagram.com/p/B776vQxDwIT/",
    featured: true,
  },
  {
    id: "gu-2018ss-press-exhibition",
    title: "GU - 2018 Spring/Summer Collection Press Exhibition",
    year: 2017,
    role: "Sound Director / Music Mix",
    category: "Brand / Film",
    style: ["Electronic", "Fashion", "Minimal"],
    description:
      "Provided a music mix for GU's 2018 Spring/Summer Collection press exhibition, supporting the brand's seasonal presentation through sound.",
    descriptionJa:
      "GU 2018年春夏コレクションのプレス展示会にて、会場演出用の楽曲MIXを提供。ブランドのシーズンプレゼンテーションを音でサポート。",
    listenLink: "https://zoomupcollection.com/2017/12/14/gu-2018ss/",
  },
  {
    id: "young-gunz-t-pablow",
    title: "YOUNG GUNZ feat. T-PABLOW × Ryutaro Ishikawa",
    year: 2016,
    role: "Producer",
    category: "Production",
    style: ["Hip Hop", "Trap", "Bass"],
    description:
      'Produced "YOUNG GUNZ feat. T-PABLOW × Ryutaro Ishikawa" under the Ryutaro Ishikawa name, released through GRAND MASTER, the label founded by Zeebra.',
    descriptionJa:
      "ZEEBRA主宰レーベルGRAND MASTERより、Ryutaro Ishikawa名義で「YOUNG GUNZ feat. T-PABLOW × Ryutaro Ishikawa」をプロデュース。",
    listenLink: "https://www.youtube.com/watch?v=AkRuKD6rTmg",
    featured: true,
  },
  {
    id: "show-gun-dear-santa",
    title: "SHOW GUN - DEAR SANTA feat. DABO & MIHIRO",
    year: 2015,
    role: "Producer",
    category: "Production",
    style: ["Hip Hop", "R&B"],
    description:
      'Produced "DEAR SANTA feat. DABO & MIHIRO" for SHOW GUN under the ISHIKAWA name, released via GRAND MASTER.',
    descriptionJa:
      "SHOW GUN「DEAR SANTA feat. DABO & MIHIRO」をISHIKAWA名義でプロデュース。ZEEBRA主宰レーベルGRAND MASTERよりリリース。",
    listenLink: "https://music.apple.com/jp/album/dear-santa-feat-dabo-mihiro-single/1062559066",
  },
  {
    id: "day-dream-stoner",
    title: 'SEEDA & DJ ISSO "CONCRETE GREEN. 13" / MonyHorse, O-JEE - Day Dream Stoner',
    year: 2015,
    role: "Producer",
    category: "Production",
    style: ["Hip Hop", "Trap", "Bass"],
    description:
      'Produced "Day Dream Stoner" by O-JEE and MonyHorse, featured as track 14 on SEEDA & DJ ISSO\'s "CONCRETE GREEN. 13."',
    descriptionJa:
      'SEEDA & DJ ISSO「CONCRETE GREEN. 13」に収録された、O-JEE, MonyHorse「Day Dream Stoner」をプロデュース。収録曲14曲目として掲載。',
    listenLink: "https://spaceshowerstore.com/detail.php?goods_id=315",
  },
];

export const featuredWorks = works.filter((w) => w.featured);
