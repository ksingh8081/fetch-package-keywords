
# fetch-package-keywords

fetch keywords of a package. Returns a promise.

fetch keywords for 'express'
```js
var fetch = require('fetch-package-keywords');
fetch('express').then(function (keywords) {
    console.log(keywords); //[ 'express', 'framework', 'sinatra', ...]
}).catch(function (error) {
    console.log(error);
});
```
