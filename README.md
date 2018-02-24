
# fetch-package-keywords

fetch keywords of a package

- returns a promise.
- fullfillment value for promise is array of keywords.


## Example
fetch keywords for 'express'
```js
var fetch = require('fetch-package-keywords');
fetch('express').then(function (keywords) {
    console.log(list); //[ 'express', 'framework', 'sinatra', ...]
}).catch(function (error) {
    console.log(error);
});
```
