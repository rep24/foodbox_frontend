# FoodBox - Frontend
Laravel × Next.js × MySql
## 概要
このアプリケーションはユーザーが食べ物の賞味期限を登録することで、賞味期限を切らしてしまったり、不必要な食材を購入してしまうことを防ぎます。  
また、楽天APIを活用して賞味期限が迫っている食材を利用したレシピを表示することにより、献立やお買い物にも有効に働きます。  

## 主な構成
１.フロントエンド
- Next.js(JavaScript)
- Chakra-UI

２.バックエンド
- Laravel
- Laravel Breeze API

３.データベース
- MySql

## プロジェクトの立ち上げ方
##### ●フロントエンド
フロントエンドはNext.jsで構築しているため、NodeJsがPCにインストールされていることが前提です。  
クローンしたディレクトリで、下記のコマンドを実行してください。  
localhost:3000でサーバーが立ち上がります。  
$ npm install  
$ npm run dev  
##### ●環境設定 - フロントエンド
.env.localファイルを作成し、下記の通り記述します。  

NEXT_PUBLIC_BACKEND_URL= バックエンド(Laravel)側のURL  
NEXT_PUBLIC_API_KEY1= 楽天レシピカテゴリ別ランキングAPIのリクエストURL  
NEXT_PUBLIC_API_KEY2= 楽天レシピカテゴリ一覧APIのリクエストURL『categoryId=』まで  

##### ●バックエンド
バックエンドはLaravelで構築したAPIサーバーです。  
##### ●環境設定 - バックエンド
.envファイルを作成し、下記の通り記述します。  
(その他の項目はご自身の環境に合わせて設定してください。)  

FRONTEND_URL=フロントエンド(Next.js)側のURL  
DB_CONNECTION=mysql  
DB_DATABASE=foodbox  
##### ●DB
DBにはMySqlを使用してください。  
データベース : foodbox  
テーブル : バックエンド側に入っているSQLをインポートしてご利用ください。  

## テストアカウント
１.管理者
- email : admin@example.com
- pwd : admin123

２.ユーザー
- email : user@example.com
- pwd : test1234



##### バックエンドのリポジトリはこちら
https://github.com/rep24/foodbox_backend.git
