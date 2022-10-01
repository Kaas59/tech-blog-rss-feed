# <img src="src/site/images/icon-transparent.png" height=26> 技術イベントRSS
技術イベントの更新をまとめたRSSフィードを配信しています。

https://kaas59.github.io/tech-event-rss-feed/


[@yamadashy](https://github.com/yamadashy)さんの作成された[yamadashy/tech-blog-rss-feed](https://github.com/yamadashy/tech-blog-rss-feed)をベースにカスタムしております。

<!--
## サイト追加の方針
企業のテックブログ（技術ブログ、エンジニアブログ）であれば、基本的には追加します。
ただし、以下に該当するものは検討します。

- その企業の取り組みでないものが多く投稿される可能性があるブログ
  - テック系メディア
  - Qiita Organization など、組織として投稿しているかの線引が曖昧なもの
- 記事が自社製品の紹介のみ
- 日本語以外の言語で書かれている記事が多いブログ

逆に、以下はテックブログと判断して追加しています。

- [Zenn](https://zenn.dev/), [note](https://note.com/), [Medium](https://medium.com/) などの企業系テックブログ
- 企業系ブログのテクノロジーカテゴリ

-->

## サイトの追加方法
[src/resources/feed-info-list.ts](https://github.com/kaas59/tech-event-rss-feed/blob/main/src/resources/feed-info-list.ts) で管理しており、その一覧にない場合 issue を作っていただければ対応します。

### プルリクでの送り方
もしプルリクを送っていただける場合は以下のように作成できます。

1. このリポジトリをフォーク
2. ブランチ作成
   `git checkout -b new-event-feed-xxx`
3. フィードを追加
   `src/resources/feed-info-list.ts` の `FEED_INFO_LIST` を更新
4. コミット
   `git commit -am 'add: 新規フィード追加`
5. プッシュ
   `git push origin new-event-feed-xxx`
6. プルリクを作成

## 開発

### 仕組み
GitHub Actions で定期的に更新されており、サイトの生成は [Eleventy](https://www.11ty.dev/) を使用しています。

更新は多少遅延ありますが以下のタイミングで行います。
- 平日 8時-24時の1時間おき
- 休日 8時-24時の2時間おき

### フォークして使う場合
以下を書き換えると独自のサイトが動くと思います。

- `src/common/constants.js` の URL など

### 開発用コマンド
フィード生成とサイト立ち上げ
```bash
$ # フィードを取得して作成
$ yarn feed-generate

$ # localhost:8080 で確認
$ yarn site-serve
```

コードのチェック
```bash
$ # lint
$ yarn lint

$ # テスト
$ yarn test
```

## ライセンス
MIT
