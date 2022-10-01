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
  ['PHP Conference Japan', 'https://phpcon.connpass.com/ja.atom'],
  ['NestJS Meetup', 'https://nest-jp.connpass.com/ja.atom'],
  ['AWSエバンジェリストシリーズ(AWSの基礎を学ぼう)', 'https://awsbasics.connpass.com/ja.atom'],
  ['OSPN(Open Source People Network)', 'https://ospn.connpass.com/ja.atom'],
  ['オハヨーAWS', 'https://ohayo-aws.connpass.com/ja.atom'],
  ['BIT VALLEY -INSIDE-', 'https://bvinside.connpass.com/ja.atom'],
  ['v-tokyo(Vue.js 日本ユーザーグループ)', 'https://vuejs-meetup.connpass.com/ja.atom'],
  ['東京Node学園(Node.js日本ユーザグループ)', 'https://nodejs.connpass.com/ja.atom'],
  ['PyCon JP', 'https://pyconjp.connpass.com/ja.atom'],
  ['VS Code Meetup', 'https://vscode.connpass.com/ja.atom'],
  ['Serverless Community(JP)', 'https://serverless.connpass.com/ja.atom'],
  ['Container Runtime Meetup', 'https://runtime.connpass.com/ja.atom'],
  ['Kubernetes Meetup Tokyo', 'https://k8sjp.connpass.com/ja.atom'],
  ['K8s@home', 'https://k8shome.connpass.com/ja.atom'],
  ['kafka.apache.jp', 'https://kafka-apache-jp.connpass.com/ja.atom'],
  ['Machine Learning for Beginners!', 'https://mlforbiginners.connpass.com/ja.atom'],
  ['GCPUG Tokyo', 'https://gcpug-tokyo.connpass.com/ja.atom'],
  ['DEEP LEARNING LAB', 'https://dllab.connpass.com/ja.atom'],
  ['Swift愛好会', 'https://love-swift.connpass.com/ja.atom'],
  ['Start Python Club', 'https://startpython.connpass.com/ja.atom'],
  ['学生LT', 'https://student-lt.connpass.com/ja.atom'],
  ['AWE Nite Tokyo', 'https://awenitetokyo.connpass.com/ja.atom'],
  ['JSSUG(Japan SQL Server User Group)', 'https://sqlserver.connpass.com/ja.atom'],
  ['LINE Developer Community', 'https://linedevelopercommunity.connpass.com/ja.atom'],
  ['日本OSS推進フォーラム', 'https://ossforum.connpass.com/ja.atom'],
  ['日本 OpenStack ユーザ会', 'https://openstack-jp.connpass.com/ja.atom'],
  ['PaaS 勉強会', 'https://paas.connpass.com/ja.atom'],
  ['html5j', 'https://html5j.connpass.com/ja.atom'],
  ['React Native Japan', 'https://react-native-meetup.connpass.com/ja.atom'],
  ['未完Labo', 'https://mikan-labo.connpass.com/ja.atom'],
  ['EngineerCafe', 'https://engineercafe.connpass.com/ja.atom'],
  ['Shopify開発者向け勉強会', 'https://shopify-meet.connpass.com/ja.atom'],
  ['W3C Web of Things Japanese Community Group', 'https://wot-jp-cg.connpass.com/ja.atom'],
  ['脆弱性対応研究会', 'https://zeijyakuseitaioukenkyukai.connpass.com/ja.atom'],
  ['情報科学若手の会', 'https://wakate.connpass.com/ja.atom'],
  ['CivicTechLT', 'https://civictechlt.connpass.com/ja.atom'],
  ['オンプレML基盤 on Kubernetes', 'https://ml-kubernetes.connpass.com/ja.atom'],
  ['DevRel Meetup in Tokyo', 'https://devrel.connpass.com/ja.atom'],
  ['Containers on AWS', 'https://aws-container.connpass.com/ja.atom'],
  ['Cloud Native Developers JP', 'https://cnd.connpass.com/ja.atom'],
  ['SRE Lounge', 'https://sre-lounge.connpass.com/ja.atom'],
  ['ISUCON', 'https://isucon.connpass.com/ja.atom'],
  ['日本ディープラーニング協会', 'https://jdla.connpass.com/ja.atom'],

  // 設計
  ['現場から学ぶモデル駆動の設計', 'https://modeling-how-to-learn.connpass.com/ja.atom'],
  ['DDD-Community-Jp', 'https://ddd-community-jp.connpass.com/ja.atom'],

  // 企業系
  ['DeNA Tech', 'https://dena.connpass.com/ja.atom'],
  ['AWS(Web系)', 'https://aws-web-tech-meetup.connpass.com/ja.atom'],
  ['note株式会社', 'https://pieceofcake.connpass.com/ja.atom'],
  ['株式会社Gaudiy', 'https://gaudiy.connpass.com/ja.atom'],
  ['ログミーTech', 'https://logmitechlive.connpass.com/ja.atom'],
  ['LAPRAS', 'https://lapras.connpass.com/ja.atom'],
  ['虎の穴ラボ(とらのあな)', 'https://yumenosora.connpass.com/ja.atom'],
  ['メルカリ/Mercari', 'https://mercari.connpass.com/ja.atom'],
  ['CARTA HOLDINGS', 'https://cartaholdings.connpass.com/ja.atom'],
  ['Forkwell Community', 'https://forkwell.connpass.com/ja.atom'],
  ['株式会社ラクス', 'https://rakus.connpass.com/ja.atom'],
  ['ファインディ/Findy', 'https://findy.connpass.com/ja.atom'],
  ['株式会社SmartHR', 'https://smarthr.connpass.com/ja.atom'],
  ['株式会社ゆめみ', 'https://yumemi.connpass.com/ja.atom'],
  ['Qiita', 'https://increments.connpass.com/ja.atom'],
  ['Gaiax Technical Meetups', 'https://gaiax.connpass.com/ja.atom'],
  ['株式会社ミクシィ', 'https://mixi.connpass.com/ja.atom'],
  ['Goodpatch Inc.', 'https://goodpatch.connpass.com/ja.atom'],
  ['Visional', 'https://d-cube.connpass.com/ja.atom'],
  ['Microsoft Open Tech Night', 'https://msdevjp.connpass.com/ja.atom'],
  ['日本マイクロソフト株式会社', 'https://microsoft-events.connpass.com/ja.atom'],
  ['株式会社ニジボックス', 'https://nijibox.connpass.com/ja.atom'],
  ['DMM.com', 'https://dmm.connpass.com/ja.atom'],
  ['freee Tech Night', 'https://freee-tech-night.connpass.com/ja.atom'],
  ['CyberAgent', 'https://cyberagent.connpass.com/ja.atom'],
  ['Speee', 'https://speee.connpass.com/ja.atom'],
  ['クックパッド株式会社', 'https://cookpad.connpass.com/ja.atom'],
  ['LINE Developer Meetup', 'https://line.connpass.com/ja.atom'],
  ['Wantedly', 'https://wantedly.connpass.com/ja.atom'],
  ['Cybozu Inside Out', 'https://cybozu.connpass.com/ja.atom'],
  ['Frontend de KANPAI!', 'https://frokan.connpass.com/ja.atom'],
  ['Yahoo! JAPAN', 'https://yj-meetup.connpass.com/ja.atom'],
  ['GMOグローバルサイン・HD', 'https://gmocloud.connpass.com/ja.atom'],
  ['UIT', 'https://uit.connpass.com/ja.atom'],
  ['Datadog Japan', 'https://datadog.connpass.com/ja.atom'],
  ['ユニークビジョン株式会社', 'https://uniquevision.connpass.com/ja.atom'],
  ['Frontend Fanclub', 'https://frontend-fanclub.connpass.com/ja.atom'],
  ['カオナビ', 'https://kaonavi.connpass.com/ja.atom'],
  ['一休.com', 'https://ikyu.connpass.com/ja.atom'],
  ['ゆるふわテック研', 'https://pickupon.connpass.com/ja.atom'],
  ['マネーフォワード', 'https://moneyforward.connpass.com/ja.atom'],
  ['株式会社ZOZO', 'https://zozotech-inc.connpass.com/ja.atom'],
  ['GMOインターネットグループ', 'https://gmo.connpass.com/ja.atom'],
  ['ラクスル/RAKSUL', 'https://raksul.connpass.com/ja.atom'],
  ['株式会社iCARE', 'https://icare.connpass.com/ja.atom'],
  ['株式会社ヤプリ', 'https://yappli.connpass.com/ja.atom'],
  ['Accenture', 'https://accenture-technology.connpass.com/ja.atom'],
  ['MoT / Mobility Technologies', 'https://jtx.connpass.com/ja.atom'],
  ['カウシェ', 'https://kauche.connpass.com/ja.atom'],
  ['U-NEXT', 'https://u-next-corporate.connpass.com/ja.atom'],
  ['Hatena Engineer Seminar', 'https://hatena.connpass.com/ja.atom'],
  ['Jamstack', 'https://jamjamjamstack.connpass.com/ja.atom'],

  // PM・PdM系
  ['開発PM勉強会', 'https://peer-quest.connpass.com/ja.atom'],
  ['Product Management Night Tokyo', 'https://product-management-night-tokyo.connpass.com/ja.atom'],
  ['SaaS.tech', 'https://saas-tech.connpass.com/ja.atom'],
  ['Engineering Manager Meetup', 'https://engineering-manager-meetup.connpass.com/ja.atom'],

  // UI・UX系
  ['UX CARAVAN', 'https://ux-caravan.connpass.com/ja.atom'],
  ['ReDesigner', 'https://redesigner.connpass.com/ja.atom'],
  ['DIST', 'https://dist.connpass.com/ja.atom'],
  ['UX DAYS TOKYO', 'https://uxdt.connpass.com/ja.atom'],
  ['Adobe XD Trail', 'https://xdtrail.connpass.com/ja.atom'],
]);
