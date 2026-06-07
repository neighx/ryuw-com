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
    id: "change-raptures-compass",
    title: "CHANGE RAPTURES - Compass feat. Ryuw",
    year: 2026,
    role: "Composer / Sound Director",
    category: "Dance",
    style: ["Hip Hop", "Electronic", "Bass", "Dance Performance"],
    description:
      'Composed and programmed "Compass feat. Ryuw" for CHANGE RAPTURES, a professional dance team competing in D.LEAGUE. The track was created for a high-impact dance performance, combining hip-hop energy, electronic textures and bass-driven sound design.',
    descriptionJa:
      "プロダンスリーグD.LEAGUEに参戦するCHANGE RAPTURESへ「Compass feat. Ryuw」を提供。ヒップホップのエネルギー、エレクトロニックな質感、ベースミュージック由来のサウンドデザインを融合させた、ダンスパフォーマンスのための楽曲。",
    listenLink: "https://www.youtube.com/watch?v=hwJU03dVHgI",
  },
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
    id: "ryuw-flower-ume",
    title: "Ryuw - Flower feat. Ume",
    year: 2026,
    role: "Artist / Producer / Composer / Recording & Mastering Engineer",
    category: "Artist",
    style: ["R&B", "Electronic", "Bass"],
    description:
      '"Flower feat. Ume" is a Ryuw single that blends R&B and electronic textures with lyrics in English and Japanese. Built around the beauty of dawn and love for Japanese street culture, the track captures a quiet sense of uplift and hope.',
    descriptionJa:
      'Ryuwによるシングル「Flower feat. Ume」。英語と日本語が溶け合うリリック、R&Bを軸にしたメロディ、エレクトロニックな質感を組み合わせた楽曲。夜明けの美しさと日本のストリートカルチャーへの愛を重ね、静かな高揚感と希望を描いている。',
    note: "Lyrics: Ume / Producer & Recording & Mastering Engineer: Ryuw / Vocal: Ume",
    listenLink: "https://linkco.re/q4Rt1Cd9?lang=ja",
  },
  {
    id: "septeni-raptures-stm",
    title: "SEPTENI RAPTURES & Ryuw - S.T.M",
    year: 2025,
    role: "Composer / Sound Director",
    category: "Dance",
    style: ["Hip Hop", "Electronic", "Bass", "Dance Performance"],
    description:
      'Created "S.T.M" for SEPTENI RAPTURES, performed in D.LEAGUE 24-25. The track is designed for a dynamic dance performance, blending hip-hop attitude, electronic production and bass-heavy sound design.',
    descriptionJa:
      "D.LEAGUE 24-25シーズン / ROUND.11で披露されたSEPTENI RAPTURESの「S.T.M」を制作。ヒップホップのアティチュード、エレクトロニックな質感、重心の低いベースサウンドを融合させた、ダンスパフォーマンス向けの楽曲。",
    note: "D.LEAGUE 24-25 SEASON - TEAM SELECTION / ROUND.11",
    listenLink: "https://linkco.re/pB8Q8qhy",
  },
  {
    id: "septeni-raptures-sensen",
    title: "SEPTENI RAPTURES & Ryuw - 宣誓",
    year: 2025,
    role: "Composer / Sound Director",
    category: "Dance",
    style: ["Hip Hop", "Electronic", "Bass", "Dance Performance"],
    description:
      'Created "宣誓" for SEPTENI RAPTURES, a professional dance team in D.LEAGUE. The track features a strong performance-oriented structure, combining vocal elements, hip-hop rhythm and electronic production for the stage.',
    descriptionJa:
      "D.LEAGUEのプロダンスチームSEPTENI RAPTURESへ「宣誓」を提供。ボーカル要素、ヒップホップのリズム、エレクトロニックなプロダクションを組み合わせ、ステージパフォーマンス向けに制作された楽曲。",
    listenLink: "https://linkco.re/T6Ut86GG",
  },
  {
    id: "wnba-phx-halftime",
    title: "WNBA PHX in Arizona - Halftime Show Dance Music Mix",
    year: 2025,
    role: "Sound Director / Music Mix",
    category: "Dance",
    style: ["Dance", "Hip Hop", "Electronic", "Bass"],
    description:
      "Provided a dance music mix for a WNBA halftime show performance in Phoenix, Arizona.",
    descriptionJa:
      "アメリカ・アリゾナ州フェニックスで行われたWNBAハーフタイムショーのダンスパフォーマンス用音源MIXを提供。",
    listenLink: "https://www.instagram.com/reel/DObD5n0k8E9/",
  },
  {
    id: "rakuten-fw-marronnier-2026ss",
    title: "Rakuten Fashion Week TOKYO - MARRONNIER COLLEGE OF FASHION DESIGN 2026 S/S Collection",
    year: 2025,
    role: "Composer / Sound Director",
    category: "Brand / Film",
    style: ["Electronic", "Bass", "Runway", "Fashion"],
    description:
      "Provided runway music for MARRONNIER COLLEGE OF FASHION DESIGN's 2026 S/S Collection, presented as an Incubation Show at Rakuten Fashion Week TOKYO. The music was created to support the show's \"Fusion\" theme, blending electronic textures, bass-driven sound design and a fashion-forward atmosphere for the runway.",
    descriptionJa:
      "Rakuten Fashion Week TOKYOにて開催された、MARRONNIER COLLEGE OF FASHION DESIGN 2026 S/S Collectionのランウェイ楽曲を提供。ショーのテーマである「Fusion」を支えるため、エレクトロニックな質感、ベースミュージックの重心、ファッションショーに合う洗練された空気感を組み合わせて制作。",
    note: "Rakuten Fashion Week TOKYO 2026 S/S Incubation Show / 2025.9.4 渋谷ヒカリエ ヒカリエホールB",
    listenLink: "https://www.youtube.com/watch?v=_FbADORxCm8",
  },
  {
    id: "septeni-raptures-own",
    title: "SEPTENI RAPTURES & Ryuw - Own",
    year: 2024,
    role: "Composer / Sound Design",
    category: "Dance",
    style: ["Hip Hop", "Electronic", "Bass", "Dance Performance"],
    description:
      'Composed and sound-designed "Own" for SEPTENI RAPTURES, a professional dance team in D.LEAGUE. The track was created to support the team\'s performance with a powerful, bass-driven and rhythmic sound.',
    descriptionJa:
      "D.LEAGUEのプロダンスチームSEPTENI RAPTURESへ「Own」を提供。チームのパフォーマンスを支えるため、ベース感のある力強いサウンドとリズムを軸に制作された楽曲。",
    listenLink: "https://linkco.re/mB3qnXeD?lang=ja",
  },
  {
    id: "ryuw-buckmoon",
    title: "Ryuw - BUCKMOON",
    year: 2024,
    role: "Artist / Composer / Producer",
    category: "Artist",
    style: ["Electronic", "Bass", "Dance"],
    description:
      '"BUCKMOON" is a Ryuw single built around a lounge-floor mood and bass music sensibility. The track reflects Ryuw\'s dark yet elegant electronic sound, with a summer-ready dance music atmosphere.',
    descriptionJa:
      'Ryuwによるシングル「BUCKMOON」。ラウンジフロアの空気感と、Ryuwが得意とするベースミュージックの質感を組み合わせた楽曲。夏の夜に合う、ダークでありながら華やかなエレクトロニック・ダンストラック。',
    note: "Released 2024.7.29 / iTunes Store Dance Top Songs Japan #52",
    listenLink: "https://linkco.re/TfadxChs?lang=ja",
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
    id: "ryuw-genei",
    title: "Ryuw - 幻影",
    year: 2021,
    role: "Artist / Lyricist / Composer / Producer",
    category: "Artist",
    style: ["Electronic", "Bass", "Trap"],
    description:
      '"幻影" is Ryuw\'s debut single as an artist, expressing a dragon traveling through time and space with 808-driven experimental bass music. The track introduces Ryuw\'s dark, futuristic and bass-heavy electronic sound.',
    descriptionJa:
      'Ryuwのアーティストとしての初シングル「幻影」。808を軸に、時空を飛ぶ龍のイメージを実験的なベースミュージックとして表現した楽曲。ダークで未来的、かつベースに重きを置いたRyuwのサウンドを示す作品。',
    note: "Released 2021.1.16 / 作詞・作曲: Ryuw",
    listenLink: "https://linkco.re/B4paMm1s?lang=ja",
  },
  {
    id: "ryuw-genei-remixes",
    title: "Ryuw - 幻影 (Remixes)",
    year: 2021,
    role: "Artist / Composer",
    category: "Remix",
    style: ["Electronic", "Bass", "Trap"],
    description:
      '"幻影 (Remixes)" is a remix EP of Ryuw\'s debut single "幻影 (Phantom)," featuring remixes by WATAPACHI, 食品まつり a.k.a foodman and ATSUKI. The project expands the original track\'s futuristic Tokyo atmosphere through dark, colorful electronic and bass music interpretations.',
    descriptionJa:
      'Ryuw初のシングル「幻影」のリミックスEP。WATAPACHI、食品まつり a.k.a foodman、ATSUKIが参加し、原曲の持つ未来都市的な世界観を、それぞれダークで華やかなエレクトロニック／ベースミュージックとして再構築した作品。',
    note: "Released 2021.3.31 / Remixes by WATAPACHI, 食品まつり a.k.a foodman, ATSUKI / Artwork: CHiNPAN",
    listenLink: "https://linkco.re/7rh0zeF4",
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
