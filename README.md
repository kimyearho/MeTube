# [2018-12-25] v1.3.2 UPDATE

![Imgur](https://i.imgur.com/nSqfCJr.png)
![Imgur](https://i.imgur.com/7WT3pmy.png)

***

![Img](https://cdn-images-1.medium.com/max/500/1*4JNvT8VJrbLKzwmfvkFFAQ.png)

### Project Information
This project is a personal project developed with the excellent Electron and Vue.JS.

### What's new ?
We are creating a simple  YouTube video player. The main purpose is a music player, but YouTube is video-based, so you can use it as a video player or you can watch all videos without advertising. Please see below for details.

### Reference
New version releases are always deployed in the repository. The new version update is fast
To keep up to date, always subscribe to the parent "watch release".
If you like the program, please click on the star! It will help developers a lot.

### Feature
"Metube" is simple and very fast. While basic search lookup is network dependent, collection management is very fast because it uses IndexedDB

***

### Installation
```
# install
> yarn

# run
> yarn run dev

# build
> yarn run build
```

### Require
Private keys are not included. Get your private key directly.
```js
# src/analiytics/analiytics.js
const analytics = new Analytics.default("[[ KEY ID HERE ]]")

# src/auth/auth.js (Google OAuth)
const CLIENT_ID = "[[ CLIENT ID HERE ]]"
const CLIENT_SECRET = "[[ CLIENT SECRET HERE ]]"

# src/renderer/plugins/pouchdb/index.js
Vue.prototype.$local = new PouchDB("[[ DB NAME HERE ]]");

# src/renderer/service/common-service.js
const API_KEY = "[[ YOUTUBE V3 API KEY ]]";
```

### Local Database
I use PouchDB as my local database. Please refer to the PouchDB documentation for usage and related information. <br/>
To manipulate a seamless database, use Couchdb Fauxton or Pouchdb-Server. <br/>
<https://pouchdb.com/>

### Open source module used for Metube
1. vue-i18n
2. vue-js-modal
3. vue-js-toggle-button
4. vue-marquee-text-component
5. vue-niege
6. vue-scrollto
7. vuedraggable
8. pouchdb
9. nprogress
10. moment
11. lodash

***

### Trello (for korean)
<https://trello.com/b/qj4gO2br/metube>

### Contributing
I want to continue developing Metube. We welcome those who can help. <br/>

## License
GNU General Public License v3.0
