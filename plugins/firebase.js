import Vue from "vue";
import firebase from "firebase/app"; // まず本体（？）をインポートして
import "firebase/auth";              // 使いたい機能を追加

// このコンフィグは「ユニークだが、秘密ではない」情報
const firebaseConfig = {
  apiKey: "AIzaSyAiZV0SbsK15cOBXjtBklaxvDJXgtBNifI",
  authDomain: "oogattanuxtfirebaseauthsample.firebaseapp.com",
  databaseURL: "https://oogattanuxtfirebaseauthsample.firebaseio.com",
  projectId: "oogattanuxtfirebaseauthsample",
  storageBucket: "oogattanuxtfirebaseauthsample.appspot.com",
  messagingSenderId: "37002371676",
  appId: "1:37002371676:web:0033285ae2bc15b038bc99",
  measurementId: "G-JX01K29N57"
};

// このプラグインはサーバでもクライントでも実行されるようにしたい
// したがって、サーバ・クライアント両側でfirebase.app.Appインスタンスを作り、保持する
//
// クライアント側はブラウザをリロードすれば既存のインスタンスを破棄するが
// サーバ側はサーバの終了までFirebaseライブラリ内の状態が維持されているので
// 一度作ったらそれ以上作らないようにする
//
// ※アプリケーションに対して取り扱うfirebase.app.Appが一つのみの場合に有効（だいたいそう）
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// とりあえずVueインスタンスのプロトタイプチェーンにinject（クライアント）
// サーバでも必要になったら "Combined inject" に変更
Vue.prototype.$firebase = firebase;
