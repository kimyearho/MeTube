import Vue from "vue"

/* PouchDB */
let PouchDB = require("pouchdb-core")
  .plugin(require("pouchdb-adapter-idb"))
  .plugin(require("pouchdb-adapter-http"))
  .plugin(require("pouchdb-replication"))
  .plugin(require("pouchdb-mapreduce"))
  .plugin(require("pouchdb-find"));

// 개발용
// Vue.prototype.$test = new PouchDB("http://localhost:5984/sample")
// Vue.prototype.$local = new PouchDB("http://localhost:5984/local")

// 내 콜렉션 로컬
Vue.prototype.$test = new PouchDB("collecton/160/release")

// 유튜브 로컬
Vue.prototype.$local = new PouchDB("local/160/release")

// 서비스
Vue.prototype.$db = new PouchDB("http://202.182.100.137/metube")