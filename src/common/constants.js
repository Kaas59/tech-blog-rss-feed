const siteUrlStem = 'https://kaas59.github.io/tech-event-rss-feed';
const siteUrl = `${siteUrlStem}/`;

module.exports = {
  // サイト設定
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: '技術イベントRSS',
  siteDescription:
    '技術イベントの更新をまとめたRSSフィードを配信しています。',

  // フィード設定
  feedTitle: '技術イベントRSS',
  feedDescription: '技術イベントの更新をまとめたRSSフィード',
  feedLanguage: 'ja',
  feedCopyright: 'kaas59/tech-event-rss-feed',
  feedGenerator: 'kaas59/tech-event-rss-feed',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // GitHub
  author: 'kaas59',
  gitHubUserUrl: 'https://github.com/kaas59/',
  gitHubRepositoryUrl: 'https://github.com/kaas59/tech-event-rss-feed/',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: '',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; kaas59/tech-event-rss-feed',
};
