import type { Work, NavLink } from "@/types/site";

export const navLinks: NavLink[] = [
  { label: "Music", href: "/music" },
  { label: "Bio / EPK", href: "/epk" },
  { label: "Contact", href: "/contact" },
];

export const works: Work[] = [
  // ── TOP バッター: YENTOWN ──────────────────────────────────────
  {
    id: "yentown-yentown",
    title: "YENTOWN - Y.E.N.T.O.W.N. feat. MonyHorse, JNKMN, PETZ, Awich & kZm",
    year: 2025,
    role: "Producer / Composer / Programming (Chaki Zulu & Ryuw)",
    category: "Artist",
    style: ["Hip Hop", "Electronic", "Bass"],
    description:
      'Co-produced "Y.E.N.T.O.W.N." by YENTOWN featuring MonyHorse, JNKMN, PETZ, Awich and kZm, included on YENTOWN\'s first album "Y.E.N." The track closes the album with a collective anthem that brings together the voices and identity of the crew.',
    descriptionJa:
      "YENTOWNの1stアルバム『Y.E.N.』に収録された「Y.E.N.T.O.W.N. feat. MonyHorse, JNKMN, PETZ, Awich & kZm」をChaki Zuluと共同プロデュース。クルーのメンバーが集結し、アルバムを締めくくるアンセム的な楽曲。",
    note: "Composer / Producer / Programming: Chaki Zulu & Ryuw",
    listenLink: "https://www.youtube.com/watch?v=-aIv6ixpW54",
    featured: true,
  },
  {
    id: "yentown-dead-life",
    title: "YENTOWN - Dead Life feat. kZm & Awich",
    year: 2025,
    role: "Producer / Composer / Programming",
    category: "Artist",
    style: ["Electronic", "Hip Hop", "Bass"],
    description:
      'Produced "Dead Life" by YENTOWN featuring kZm and Awich, included on the album "Y.E.N." Built from gospel-inspired piano ideas into a fast-moving electronic hip-hop track.',
    descriptionJa:
      "YENTOWNのアルバム『Y.E.N.』に収録された「Dead Life feat. kZm & Awich」をプロデュース。ゴスペル調のピアノから発展し、疾走感のあるエレクトロニックなヒップホップトラックに仕上げた楽曲。",
    note: "Composer: kZm, Awich, Ryuw / Producer & Programming: Ryuw",
    listenLink: "https://genius.com/Yentown-dead-life-lyrics",
    featured: true,
  },

  // ── FOODMAN → DREAMS COME TRUE → GLAY → ONE PIECE ─────────────
  {
    id: "foodman-246",
    title: "Diplo's MAD DECENT / FOODMAN - 246 feat. Ryuw",
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
    listenLink: "https://store.universal-music.co.jp/products/umck1674",
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

  // ── 年代順 ────────────────────────────────────────────────────
  {
    id: "jnkmn-loading",
    title: "JNKMN - LOADING",
    year: 2026,
    role: "Producer / Composer (Ryuw & Teje)",
    category: "Production",
    style: ["Hip Hop", "Electronic", "Bass"],
    description:
      'Co-produced "LOADING" by JNKMN with Teje, included on JNKMN\'s 2026 album "OD."',
    descriptionJa:
      "JNKMNの2026年アルバム『OD』に収録された「LOADING」をTejeと共同プロデュース。",
    listenLink: "https://www.youtube.com/watch?v=9fRZz3Oa1oY",
  },
  {
    id: "jnkmn-lets-go",
    title: "JNKMN - LET'S GO feat. Deech & Lunv Loyal",
    year: 2026,
    role: "Producer / Composer",
    category: "Production",
    style: ["Hip Hop", "Trap", "Bass"],
    description:
      'Produced "LET\'S GO" by JNKMN featuring Deech and Lunv Loyal, included on the 2026 album "OD."',
    descriptionJa:
      "JNKMNの2026年アルバム『OD』に収録された「LET'S GO feat. Deech & Lunv Loyal」をプロデュース。",
    listenLink: "https://www.youtube.com/watch?v=76zj4k2OqG0",
  },
  {
    id: "sunny-only1-how-you-doing",
    title: "SUNNY ONLY 1 - How you doing",
    year: 2021,
    role: "Producer / Composer",
    category: "Production",
    style: ["R&B", "Electronic", "Bass", "Pop"],
    description:
      'Produced "How you doing," the debut single by SUNNY ONLY 1. The track combines bass music and song-oriented production with a positive, danceable energy.',
    descriptionJa:
      "SUNNY ONLY 1のデビューシングル「How you doing」をプロデュース。ベースミュージックの流れと歌ものの感覚を融合させた、ポジティブで自然に踊れる楽曲。",
    note: "2021年4月10日リリース / Composer: SUNNY ONLY 1, Ryuw",
    listenLink: "https://www.youtube.com/watch?v=a68V0t7ITcE",
  },
  {
    id: "sunny-only1-star-side",
    title: "SUNNY ONLY 1 - Star side",
    year: 2021,
    role: "Producer / Composer",
    category: "Production",
    style: ["R&B", "Electronic", "Afrobeat", "Pop"],
    description:
      'Produced "Star side" by SUNNY ONLY 1, released via ASOBISYSTEM. The track blends Afrobeat and dancehall-inspired rhythms with acoustic guitar textures and an alternative R&B vocal approach.',
    descriptionJa:
      "ASOBISYSTEMよりリリースされたSUNNY ONLY 1の2ndシングル「Star side」をプロデュース。アフロビートやダンスホールのリズム、アコースティックギターの質感、オルタナティブR&B的なボーカルが重なるダンスチューン。",
    listenLink: "https://spincoaster.com/news/sunny-only1-release-new-single-star-side",
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
