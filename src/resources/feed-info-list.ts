export type FeedInfo = {
  label: string;
  url: string;
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({ label, url });
  }

  return feedInfoList;
};

// フィード情報一覧。アルファベット順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  // 技術系
  ['JAWS-UG初心者支部', 'https://jawsug-bgnr.connpass.com/ja.atom'],
  ['JAWS-UG東京', 'https://jawsug.connpass.com/ja.atom'],
  ['JAWS-UGビッグデータ支部', 'https://jawsug-bigdata.connpass.com/ja.atom'],
  ['JAWS-UG HPC専門支部', 'https://jawsug-hpc.connpass.com/ja.atom'],
  ['JAWS-UG コンテナ支部', 'https://jawsug-container.connpass.com/ja.atom'],
  ['JAWS-UG CLI専門支部', 'https://jawsug-cli.connpass.com/ja.atom'],
  ['JAWS-UG横浜支部', 'https://jawsug-yokohama.connpass.com/ja.atom'],
  ['JAWS-UG SRE支部', 'https://jawsug-sre.connpass.com/ja.atom'],
  ['JAWS-UG GameTech専門支部', 'https://jawsug-gametech.connpass.com/ja.atom'],
  ['JAWS-UG CDK支部', 'https://jawsug-cdk.connpass.com/ja.atom'],
  ['JAWS-UG IoT専門支部', 'https://jawsug-iot.connpass.com/ja.atom'],
  ['JAWS-UG朝会', 'https://jawsug-asa.connpass.com/ja.atom'],
  ['AWS Startup Community', 'https://aws-startup-community.connpass.com/ja.atom'],
]);
